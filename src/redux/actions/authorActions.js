import * as types from './actionTypes';
import { getAuthors } from '../../api/authorApi';

export function loadAuthorsSuccess(authors){
    return {
        type: types.LOAD_AUTHORS,
        authors: authors
    }
}

export function loadAuthors(){
    return function (dispatch) {
        return getAuthors()
        .then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        })
        .catch(err => {
            throw err;
        })
    }
}