import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './MovieList.scss'

import { SwiperSlide, Swiper } from 'swiper/react'
import movieApi, { category } from '../../api/movieApi'
import MovieItem from '../movie-item/MovieItem'

const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if(props.type !== 'similar'){
                switch(props.category) {
                    case category.movie:
                        response = await movieApi.getMovieList(props.type, {params});
                        break;
                    default:
                        response = await movieApi.getTvList(props.type, {params});
                }
            }
            else {
                //console.log(props.category);
                response = await movieApi.getSimilar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, [])

    return (
        <div className='movie-list'>
            <Swiper
                grabCursor={true}
                spaceBetween={12}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <MovieItem category={props.category} item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList
