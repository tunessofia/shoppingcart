import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootWatcherSaga from "./sagas";
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

// get cart from local storage
const persistedState = loadState("cart");

//initiate saga
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, {cart: persistedState}, applyMiddleware(sagaMiddleware));

// save cart in local storage
store.subscribe(() => saveState("cart", store.getState()["cart"]));

// run the saga
sagaMiddleware.run(rootWatcherSaga);