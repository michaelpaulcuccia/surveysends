import axios from 'axios';
import { FETCH_USER } from './types';

//redux-thunk provides direct access to dispatch function 

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data })
};

/*
export const fetchUser = () => {
    return function (dispatch) {
        axios.get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }))
    }
};
*/