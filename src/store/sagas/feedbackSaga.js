import axios from 'axios';
import { put } from 'redux-saga/effects';
import {
  resetNewFeedback,
  setError,
  setFeedbackList,
  setIsLoading,
} from '../slices/feedbackSlice';
import FEEDBACK_ACTION_TYPES from '../actions/feedbackTypes';

export function* getAllFeedback() {
  yield put(setIsLoading(true));
  try {
    const response = yield axios.get('/api/feedback');
    const data = yield response.data;
    yield put(setFeedbackList(data));
    yield put(setIsLoading(false));
  } catch (e) {
    console.error(e);
    yield put(setIsLoading(false));
    yield put(setError({ error: true, message: e.message }));
  }
}

export function* createFeedback(action) {
  yield put(setIsLoading(true));
  try {
    yield axios.post('/api/feedback', action.payload);
    yield put(setIsLoading(false));
    yield put(resetNewFeedback());
  } catch (e) {
    console.error(e);
    yield put(setIsLoading(false));
    yield put(setError({ error: true, message: e.message }));
  }
}

export function* deleteFeedback(action) {
  yield put(setIsLoading(true));
  try {
    yield axios.delete(`/api/feedback/${action.payload}`);
    yield put(setIsLoading(false));
    yield put({ type: FEEDBACK_ACTION_TYPES.GET_ALL_FEEDBACK });
  } catch (e) {
    console.error(e);
    yield put(setIsLoading(false));
    yield put(setError({ error: true, message: e.message }));
  }
}
