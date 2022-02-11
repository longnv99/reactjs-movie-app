import React, { useContext } from 'react'
import MovieItem from '../components/movie-item/MovieItem';
import { GlobalContext, typeName } from '../store/GlobalState'

const WatchList = () => {
    const { watchlist } = useContext(GlobalContext);

    return (
        <>
            <div className="container">
                <div className='page-header'>
                    <h2>Watchlist</h2>
                </div>
                <div className="section mb-3">
                    {
                        watchlist.length > 0 ? (
                            <div className='movie-grid'>
                            {
                                watchlist.map((item, index) => (
                                    <MovieItem 
                                        key={index}
                                        category={item.category} 
                                        item={item} 
                                        activeButton={'add-disable'}
                                        activeControll={'active-controll'}
                                        typeName={typeName.watchlist}
                                    />
                                ))
                            }
                            </div>
                        ) : ( <div>You haven't added any movies to your watchlist.</div>)
                    }
                </div>
            </div>
        </>
    )
}

export default WatchList
