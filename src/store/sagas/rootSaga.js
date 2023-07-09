import { takeEvery } from 'redux-saga/effects';
import { createFeedback } from './feedbackSaga';
import FEEDBACK_ACTION_TYPES from '../actions/feedbackTypes';

function* rootSaga() {
  yield takeEvery(FEEDBACK_ACTION_TYPES.CREATE_FEEDBACK, createFeedback);
}

export default rootSaga;
