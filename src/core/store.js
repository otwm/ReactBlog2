import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createLogger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {requestFetchPostProcess} from "./saga";

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(
    applyMiddleware(createLogger(), sagaMiddleware)
);

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer
    );

    sagaMiddleware.run(requestFetchPostProcess)
    return {store};
}