import { createContext, useEffect, useReducer } from "react"
import { AppReducer } from './AppReducer'

export const typeName = {
    watchlist: 'watchlist',
    watched: 'watched',
}

const initState = {
    watchlist: localStorage.getItem(typeName.watchlist) ? JSON.parse(localStorage.getItem(typeName.watchlist)) : [],
    watched: localStorage.getItem(typeName.watched) ? JSON.parse(localStorage.getItem(typeName.watched)) : [],
}

export const GlobalContext = createContext(initState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initState);

    useEffect(() => {
        localStorage.setItem(typeName.watchlist, JSON.stringify(state.watchlist))
        localStorage.setItem(typeName.watched, JSON.stringify(state.watched))
    }, [state])

    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }
    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }
    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie})
    }
    const moveToWatchlist = (movie) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie})
    }
    const removeMovieFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id})
    } 

    return (
        <GlobalContext.Provider 
            value={{ 
                watchlist:state.watchlist,
                watched: state.watched,
                addMovieToWatchlist,
                removeMovieFromWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeMovieFromWatched,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}