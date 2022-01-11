import React from 'react'
import './PageHeader.scss'
import { category, movieName, tvName } from '../../api/movieApi'

const PageHeader = (props) => {
    const cate = props.category;
    const type = props.type;

    return (
        <div className='page-header'>
            <h2>
                {
                    cate === category.movie ? movieName[type]: tvName[type]
                }
            </h2>
        </div>
    )
}

export default PageHeader
