import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { movieType, tvType } from '../api/movieApi'
import Button from '../components/button/Button'
import MovieList from '../components/movie-list/MovieList'
import Slide from '../components/slide/Slide'
import { category } from '../api/movieApi'

const Home = () => {
    const param = useParams();
    //const cate = param.category;

    const width = window.innerWidth;

    return (
        <>
            <Slide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movie</h2>
                        <Link to={`${category.movie}/${movieType.popular}`}>
                            <Button 
                                className={ width < 740 ? 'small--mobile' : 'small'}
                            >
                                View more
                            </Button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movie</h2>
                        <Link to={`${category.movie}/${movieType.top_rated}`}>
                            <Button 
                                className={ width < 740 ? 'small--mobile' : 'small'}
                            >
                                View more
                            </Button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Up Coming Movie</h2>
                        <Link to={`${category.movie}/${movieType.upcoming}`}>
                            <Button 
                                className={ width < 740 ? 'small--mobile' : 'small'}
                            >
                                View more
                            </Button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.upcoming}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to={`${category.tv}/${tvType.popular}`}>
                            <Button 
                                className={ width < 740 ? 'small--mobile' : 'small'}
                            >
                                View more
                            </Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to={`${category.tv}/${tvType.top_rated}`}>
                            <Button 
                                className={ width < 740 ? 'small--mobile' : 'small'}
                            >
                                View more
                            </Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>On The Air TV</h2>
                        <Link to={`${category.tv}/${tvType.on_the_air}`}>
                            <Button 
                                className={ width < 740 ? 'small--mobile' : 'small'}
                            >
                                View more
                            </Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.on_the_air}/>
                </div>
            </div>
        </>
    )
}

export default Home
