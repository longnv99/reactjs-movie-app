import React from 'react'
import './MovieItem.scss'

import apiConfig from '../../api/apiConfig'
import { Link } from 'react-router-dom'
import Circle from '../circle-vote/Circle'

const MovieItem = props => {

    const item = props.item;
    const cate = props.category;
    let urlImg;

    if(item.poster_path || item.backdrop_path) {
        urlImg = apiConfig.w500lImage(item.poster_path ? item.poster_path : item.backdrop_path);
    }else {
        urlImg = 'https://upload.wikimedia.org/wikipedia/commons/1/16/No_image_available_450_x_600.svg';
    }

    const date = item.release_date || item.first_air_date;
    
    return (
        <Link to={`/${cate}/detail/${item.id}`}>
            <div className='movie-item'>
                <div 
                    className="movie-item__img"
                    style={ {backgroundImage: `url(${urlImg})`} }
                >
                    <div className="vote">
                        <Circle vote_average={Number(item.vote_average).toFixed(1)} />
                    </div>
                </div>
                <div className="movie-item__info">
                    <h4>{item.title || item.name}</h4>
                    <h3>{ date ? date.split('-').reverse().join('/') : null}</h3>
                </div>
            </div>
        </Link>
    )
}

export default MovieItem
