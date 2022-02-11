import { actionType } from './actions'

export const AppReducer = (state, action) => {
    switch(action.type) {
        case actionType.ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            }
        case actionType.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !==action.payload),
            }
        case actionType.ADD_MOVIE_TO_WATCHED:
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !==action.payload.id),
                watched: [...state.watched, action.payload],
            }
        case actionType.MOVE_TO_WATCHLIST:
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !==action.payload.id),
                watchlist: [...state.watchlist, action.payload]
            }
        case actionType.REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !==action.payload),
            }
        default:
            return state;
    }
}