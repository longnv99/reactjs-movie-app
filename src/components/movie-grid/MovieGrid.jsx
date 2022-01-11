import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import movieApi, { category } from '../../api/movieApi';
import './MovieGrid.scss'
import MovieItem from '../movie-item/MovieItem'
import Button, { OutlineButton } from '../../components/button/Button'
import Input from '../../components/input/Input'

const MovieGrid = (props) => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);

    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;

            if(keyword === undefined){
                const params = {};
                switch(props.category) {
                    case category.movie:
                        response = await movieApi.getMovieList(props.type, {params});
                        break;
                    default:
                        response = await movieApi.getTvList(props.type, {params});
                }
            }
            else {
                const params = {
                    query: keyword
                }
                response = await movieApi.getSearch(props.category, {params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, props.type, keyword])

    const loadMore = async () => {
        let response = null;

            if(keyword === undefined){
                const params = {
                    page: page + 1
                };
                switch(props.category) {
                    case category.movie:
                        response = await movieApi.getMovieList(props.type, {params});
                        break;
                    default:
                        response = await movieApi.getTvList(props.type, {params});
                }
            }
            else {
                const params = {
                    page: page + 1,
                    query: keyword
                }
                response = await movieApi.getSearch(props.category, {params});
            }
            setItems([...items, ...response.results]);
            setPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className='movie-grid'>
                {
                    items.map((item, index) => <MovieItem category={props.category} item={item} key={index} />)
                }
            </div>
            {
                page < totalPage ? (
                    <div className='movie-grid__loadmore'>
                        <OutlineButton className='small' onClick={() => loadMore()}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    )
}

const MovieSearch = props => {

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const navigate = useNavigate();

    const gotoSearch = useCallback(
        () => {
            if(keyword.trim().length > 0){
                navigate(`search/${keyword}`)
            }
        },
        [keyword, navigate],
    )

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if(e.keyCode === 13){
                gotoSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        }
    }, [keyword, gotoSearch])
    
    return (
        <div className="movie-search">
            <Input 
                type="text"
                placeholder='Enter keyword'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}

            />
            <Button className='small' onClick={() => gotoSearch()}>Search</Button>
        </div>
    )
}

export default MovieGrid
