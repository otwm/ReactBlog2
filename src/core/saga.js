import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {fetchPost, REQUEST_FETCH_POST} from "./actions";

function* fetchPostProcess() {
    try {
        const {data} = yield call(
            () => axios.get('http://codesanctum.net:4000/')
        );
        yield put(fetchPost(data));
    } catch (e) {
        console.error(e)
        // yield put();
    }
}

export function* requestFetchPostProcess() {
    yield takeEvery(REQUEST_FETCH_POST, fetchPostProcess);
}