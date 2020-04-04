import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { rootReducer } from '../reducers/root';
import logger from 'redux-logger'

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(promiseMiddleware, logger))
//   return createStore(rootReducer, preloadedState)
};

export default configureStore;