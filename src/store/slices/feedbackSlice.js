import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feedbackList: [],
  newFeedback: {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
  },
  isLoading: false,
  error: '',
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setNewFeedback: (state, action) => {
      state.newFeedback = {
        ...state.newFeedback,
        ...action.payload,
      };
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setIsLoading, setNewFeedback, setError } = feedbackSlice.actions;
export default feedbackSlice.reducer;
