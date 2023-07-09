import { takeEvery } from 'redux-saga/effects';
import { createFeedback, deleteFeedback, getAllFeedback } from './feedbackSaga';
import FEEDBACK_ACTION_TYPES from '../actions/feedbackTypes';

function* rootSaga() {
  yield takeEvery(FEEDBACK_ACTION_TYPES.CREATE_FEEDBACK, createFeedback);
  yield takeEvery(FEEDBACK_ACTION_TYPES.GET_ALL_FEEDBACK, getAllFeedback);
  yield takeEvery(FEEDBACK_ACTION_TYPES.DELETE_FEEDBACK, deleteFeedback);
}

export default rootSaga;
