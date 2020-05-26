import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from "./sagas";
import { rootReducer, initialState } from './reducers';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

// run the saga
sagaMiddleware.run(watcherSaga);