import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'

export default (rootReducer, rootSaga) => {
  const middleware     = [];
  const enhancers      = [];
  const sagaMiddleware = createSagaMiddleware();
  const logger         = createLogger();
  middleware.push(sagaMiddleware);
  middleware.push(logger);

  enhancers.push(applyMiddleware(...middleware));
  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  return store
}