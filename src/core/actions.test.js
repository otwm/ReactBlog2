import {fetchPost, FETCH_POST, requestFetchPost, REQUEST_FETCH_POST} from "./actions";

describe('actions test!!!', () => {
    it('post core test', () => {
        const error = new TypeError("not a number");

        expect(requestFetchPost(1)).toEqual({
            type: REQUEST_FETCH_POST,
            payload: 1,
        })
        expect(requestFetchPost(error)).toEqual({
            type: REQUEST_FETCH_POST,
            payload: error,
            error: true,
        })

        expect(fetchPost(1)).toEqual({
            type: FETCH_POST,
            payload: 1,
        })

        expect(fetchPost(error)).toEqual({
            type: FETCH_POST,
            payload: error,
            error: true,
        })
    });
});