import InputCard from './InputCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewFeedback } from '../../store/slices/feedbackSlice';

export default function Understanding() {
  const understanding = useSelector(
    (state) => state.feedback.newFeedback.understanding
  );
  const initialState = understanding ?? null;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [localUnderstanding, setLocalUnderstanding] = useState(initialState);
  const next = () => {
    dispatch(setNewFeedback({ understanding: localUnderstanding }));
    navigator('/support');
  };
  const previous = () => {
    if (localUnderstanding !== understanding) {
      dispatch(setNewFeedback({ understanding: localUnderstanding }));
    }
    navigator('/feeling');
  };
  const onChange = (e) => setLocalUnderstanding(e.target.value);

  return (
    <InputCard
      next={next}
      previous={previous}
      title="How well are you understanding the material?"
      placeholder="I understand.."
      value={localUnderstanding}
      setValue={onChange}
      required
    />
  );
}
