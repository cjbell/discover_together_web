import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger();

export default function configureStore() {
  const store = createStore(
    reducers,
    applyMiddleware(thunk, sagaMiddleware, logger),
  );

  sagaMiddleware.run(sagas);

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer);
      });
    }
  }

  return store;
}
