import { createSlice } from '@reduxjs/toolkit';

export const initialFeedbackState = {
  feedbackList: [],
  newFeedback: {
    feeling: null,
    understanding: null,
    support: null,
    comments: null,
  },
  isLoading: false,
  isError: {
    error: false,
    message: '',
  },
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: initialFeedbackState,
  reducers: {
    setNewFeedback: (state, action) => {
      state.newFeedback = {
        ...state.newFeedback,
        ...action.payload,
      };
    },
    setFeedbackList: (state, action) => {
      state.feedbackList = action.payload;
    },
    resetNewFeedback: (state) => {
      state.newFeedback = initialFeedbackState.newFeedback;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setFeedbackList,
  resetNewFeedback,
  setNewFeedback,
  setError,
} = feedbackSlice.actions;
export default feedbackSlice.reducer;
