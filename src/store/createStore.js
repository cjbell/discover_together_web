import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger();

export default function configureStore() {
  const store = createStore(
    reducers,
    applyMiddleware(thunk, promise, logger),
  );

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers');
        store.replaceReducer(nextRootReducer);
      });
    }
  }

  return store;
}
