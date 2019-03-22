import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import reducer from './reducer';
import { loadState } from '../utils/storage.js';


const preLoadState = loadState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
  const store = createStore(
    reducer,
    preLoadState,
    
    composeEnhancers(applyMiddleware(thunkMiddleware))
  )

  return store;
}