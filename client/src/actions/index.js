import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () =>
    //redux-thunk provides direct access to dispatch callback function 
    async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data })
    };

export const handleToken = (token) =>
    //redux-thunk provides direct access to dispatch callback function 
    async dispatch => {
        const res = await axios.post('/api/stripe', token);
        dispatch({ type: FETCH_USER, payload: res.data })
    };