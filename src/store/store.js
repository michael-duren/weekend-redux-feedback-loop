import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './slices/feedbackSlice';
import { logger } from 'redux-logger/src';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(logger, sagaMiddleware),
});

// attach the watcher saga
sagaMiddleware.run(rootSaga);

export default store;
