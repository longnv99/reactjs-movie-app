import React from 'react'
import { useParams } from 'react-router-dom'
import MovieGrid from '../components/movie-grid/MovieGrid';
import PageHeader from '../components/page-header/PageHeader'

function ViewMore(props) {
    const param = useParams();
    return (
        <>
            <PageHeader 
                category={param.category}
                type={param.type}
            />
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={param.category} type={param.type} />
                </div>
            </div>
            
        </>
    )
}

export default ViewMore

