import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide }from 'swiper/react';
import Button, { OutlineButton } from '../button/Button';
import { useNavigate } from 'react-router';
import Modal, { ModalContent } from '../modal/Modal';
import './Slide.scss';

import movieApi, { category, movieType } from '../../api/movieApi';
import apiConfig from '../../api/apiConfig';

const Slide = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}

            try {
                const response = await movieApi.getMovieList(movieType.popular, { params });
                setMovieItems(response.results.slice(0, 5));
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
    }, [])

    return (
        <div className='slide'>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                // autoplay={{delay: 4000}}
            >
                {
                    movieItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <SlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                        
                    ))
                }   
            </Swiper>
            {
                movieItems.map((item, index) => <Trailer key={index} item={item} />)
            }
        </div>
    )
}

const SlideItem = props => {
    const navigate = useNavigate();

    const item = props.item;

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal__${item.id}`);
        const videos = await movieApi.getVideos(category.movie,item.id);
        
        if(videos.results.length > 0){
            const src = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', src);
        }
        else {
            modal.querySelector('.modal__content').innerHTML = 'No movie trailer';
        }

        modal.classList.toggle('active');
    }

    const width = window.innerWidth;

    return (
        <div
            className={`slide__item ${props.className}`}
            style={ {backgroundImage: `url(${background})`} }
        >
            <div className="slide__item__content container">
                <div className="slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">
                        { width < 740 ? item.overview.slice(0, 90).concat('...') : item.overview}
                    </div>
                    <div className="btns">
                        <Button 
                            onClick={() => navigate('/movie/detail/'+item.id)}
                            className={ width < 740 ? 'small' : ''}
                        >
                            Watch now
                        </Button>
                        <OutlineButton 
                            onClick={setModalActive}
                            className={ width < 740 ? 'small' : ''}
                        >
                            Watch trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="slide__item__content__poster">
                    <img src={apiConfig.w500lImage(item.poster_path)} alt=''/>
                </div>
            </div>
        </div>
    )
}

const Trailer = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal__${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe 
                    ref={iframeRef} 
                    title="trailer"
                >
                </iframe>
            </ModalContent>
        </Modal>
    )
}

export default Slide
