import React, { useContext, useEffect, useState } from 'react'
import './Detail.scss';
import { useParams } from 'react-router-dom'
import apiConfig from '../../api/apiConfig';
import movieApi from '../../api/movieApi';
import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList'
import Circle from '../../components/circle-vote/Circle';
import { GlobalContext } from '../../store/GlobalState';

function Detail() {
    const { category, id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await movieApi.getDetail(category, id, {params: {}});
            setItem(response);
            window.scrollTo(0, 0);
        }
        getDetail();
    }, [category, id])

    const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);
    let storedMovie = watchlist.find(o => o.id == id)
    let storedMovieWatched = watched.find(o => o.id == id)

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.w500lImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, index) => (
                                            <span key={index} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <div className="options">
                                    <Circle vote_average={item.vote_average} />
                                    <button 
                                        className={`contain ${watchlistDisabled ? 'active' : null}`}
                                        disabled={watchlistDisabled}
                                        onClick={() => addMovieToWatchlist(item)}
                                    >
                                        <div className="circle">
                                            <div className="icon">
                                            {
                                                watchlistDisabled ? <i className="fa-solid fa-bookmark active"></i> 
                                                : <i className="fas fa-plus-circle"></i>
                                            }
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id}/>
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }  
        </>
    )
}

export default Detail
