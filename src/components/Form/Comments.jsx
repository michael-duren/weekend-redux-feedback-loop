import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputCard from './InputCard';
import { useDispatch, useSelector } from 'react-redux';
import { setNewFeedback } from '../../store/slices/feedbackSlice';

export default function Comments() {
  const comments = useSelector((state) => state.feedback.newFeedback.comments);
  const initialState = comments ?? null;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [localComments, setLocalComments] = useState(initialState);
  const next = () => {
    dispatch(setNewFeedback({ comments: localComments }));
    navigator('/review');
  };
  const previous = () => {
    if (comments !== localComments) {
      dispatch(setNewFeedback({ comments: localComments }));
    }
    navigator('/support');
  };
  const onChange = (e) => setLocalComments(e.target.value);

  return (
    <InputCard
      next={next}
      previous={previous}
      title="Any Comments? Leave Below"
      placeholder="I feel..."
      value={localComments}
      setValue={onChange}
      text
    />
  );
}
