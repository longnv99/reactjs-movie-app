import React, { useContext } from 'react'
import MovieItem from '../components/movie-item/MovieItem';
import { GlobalContext, typeName } from '../store/GlobalState'

const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <>
            <div className="container">
                <div className='page-header'>
                    <h2>Watched</h2>
                </div>
                <div className="section mb-3">
                    {
                        watched.length > 0 ? (
                            <div className='movie-grid'>
                            {
                                watched.map((item, index) => (
                                    <MovieItem 
                                        key={index}
                                        category={item.category} 
                                        item={item} 
                                        activeButton={'add-disable'}
                                        activeControll={'active-controll'}
                                        typeName={typeName.watched}
                                    />
                                ))
                            }
                            </div>
                        ) : ( <div>No movies have been watched yet.</div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Watched
