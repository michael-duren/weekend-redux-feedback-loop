import axios from 'axios';
import { put } from 'redux-saga/effects';
import {
  resetNewFeedback,
  setError,
  setIsLoading,
} from '../slices/feedbackSlice';

export function* createFeedback(action) {
  yield put(setIsLoading(true));
  try {
    const response = yield axios.post('/api/feedback', action.payload);
    yield put(setIsLoading(false));
    yield put(resetNewFeedback());
  } catch (e) {
    console.error(e);
    yield put(setIsLoading(false));
    yield put(setError({ error: true, message: e.message }));
  }
}
