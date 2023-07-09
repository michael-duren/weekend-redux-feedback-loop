import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputCard from './InputCard';
import { useDispatch, useSelector } from 'react-redux';
import { setNewFeedback } from '../../store/slices/feedbackSlice';

export default function Feeling() {
  const feeling = useSelector((state) => state.feedback.newFeedback.feeling);
  const initialState = feeling ?? null;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [localFeeling, setLocalFeeling] = useState(initialState);
  const next = () => {
    dispatch(setNewFeedback({ feeling: localFeeling }));
    navigator('/understanding');
  };
  const previous = () => {
    if (feeling !== localFeeling) {
      dispatch(setNewFeedback({ feeling: localFeeling }));
    }
    navigator('/');
  };
  const onChange = (e) => setLocalFeeling(e.target.value);

  return (
    <InputCard
      next={next}
      previous={previous}
      title="How are you feeling?"
      placeholder="I'm feeling..."
      value={localFeeling}
      setValue={onChange}
      required
    />
  );
}
