import {handleActions} from "redux-actions";
import {fetchPost} from "./actions";

const reducer = handleActions({
    [fetchPost]: (state, {payload}) => ({
        content: payload
    }),
}, {content: null});

export default reducer;