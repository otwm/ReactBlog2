import {createActions} from "redux-actions";

export const REQUEST_FETCH_POST = 'REQUEST_FETCH_POST';
export const FETCH_POST = 'FETCH_POST';

const {requestFetchPost, fetchPost} = createActions(
    REQUEST_FETCH_POST,
    FETCH_POST,
);

export {requestFetchPost, fetchPost}