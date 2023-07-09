import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
    setFeeling: (state, action) => {
      state.newFeedback.feeling = action.payload;
    },
    setUnderstanding: (state, action) => {
      state.newFeedback.understanding = action.payload;
    },
    setSupport: (state, action) => {
      state.newFeedback.support = action.payload;
    },
    setComments: (state, action) => {
      state.newFeedback.comments = action.payload;
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
  setFeeling,
  setIsLoading,
  setUnderstanding,
  setSupport,
  setComments,
  setError,
} = feedbackSlice.actions;
export default feedbackSlice.reducer;
