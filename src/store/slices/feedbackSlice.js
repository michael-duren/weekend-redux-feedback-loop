import { createSlice } from '@reduxjs/toolkit';

export const initialFeedbackState = {
  feedbackList: [],
  newFeedback: {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
  },
  isLoading: false,
  isError: {
    error: true,
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

export const { setIsLoading, resetNewFeedback, setNewFeedback, setError } =
  feedbackSlice.actions;
export default feedbackSlice.reducer;
