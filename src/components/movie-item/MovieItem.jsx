import React, { useContext } from 'react'
import './MovieItem.scss'

import apiConfig from '../../api/apiConfig'
import { Link } from 'react-router-dom'
import Circle from '../circle-vote/Circle'
import { GlobalContext, typeName } from '../../store/GlobalState'

const MovieItem = props => {

    const item = props.item;
    const cate = props.category;
    item.category = cate;
    const type = props.typeName;
    let urlImg;

    if(item.poster_path || item.backdrop_path) {
        urlImg = apiConfig.w500lImage(item.poster_path ? item.poster_path : item.backdrop_path);
    }else {
        urlImg = 'https://upload.wikimedia.org/wikipedia/commons/1/16/No_image_available_450_x_600.svg';
    }

    const date = item.release_date || item.first_air_date;

    const { 
        addMovieToWatchlist, 
        addMovieToWatched,
        moveToWatchlist,
        removeMovieFromWatched,
        removeMovieFromWatchlist,
        watchlist, 
        watched 
    } = useContext(GlobalContext);
    
    let storedMovie = watchlist.find(o => o.id === item.id)
    let storedMovieWatched = watched.find(o => o.id === item.id)

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    
    return (
        <div className='movie-item'>
            <Link to={`/${cate}/detail/${item.id}`}>
                <div 
                    className="movie-item__img"
                    style={ {backgroundImage: `url(${urlImg})`} }
                >
                    <div className="vote">
                        <Circle vote_average={Number(item.vote_average).toFixed(1)} />
                    </div>
                </div>
            </Link>
                <div className="movie-item__info">
                    <h4>{item.title || item.name}</h4>
                    <h3>{ date ? date.split('-').reverse().join('/') : null}</h3>
                </div>
                <button 
                    className={props.activeButton ? props.activeButton : 'add'} 
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(item)}
                >
                    {
                        watchlistDisabled ? <i className="fa-solid fa-bookmark active"></i> 
                        : <i className="fas fa-plus-circle"></i>
                    }
                </button>
                <div className={props.activeControll ? props.activeControll : null}>
                    {
                        type === typeName.watchlist && (
                            <>
                                <button 
                                    className="ctrl-btn"
                                    onClick={() => addMovieToWatched(item)}
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                                <button 
                                    className="ctrl-btn"
                                    onClick={() => removeMovieFromWatchlist(item.id)}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </>
                        )
                    }
                    {
                        type === "watched" && (
                            <>
                                <button 
                                    className="ctrl-btn"
                                    onClick={() => moveToWatchlist(item)}
                                >
                                    <i className="fas fa-eye-slash"></i>
                                </button>
                                <button 
                                    className="ctrl-btn"
                                    onClick={() => removeMovieFromWatched(item.id)}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </>
                        )
                    }
                </div>
        </div>
    )
}

export default MovieItem
