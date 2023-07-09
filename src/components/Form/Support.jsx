import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputCard from './InputCard';
import { useDispatch, useSelector } from 'react-redux';
import { setNewFeedback } from '../../store/slices/feedbackSlice';

export default function Support() {
  const support = useSelector((state) => state.feedback.newFeedback.support);
  const initialState = support ?? null;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [localSupport, setLocalSupport] = useState(initialState);
  const next = () => {
    dispatch(setNewFeedback({ support: localSupport }));
    navigator('/comments');
  };
  const previous = () => {
    if (support !== localSupport) {
      dispatch(setNewFeedback({ support: localSupport }));
    }
    navigator('/understanding');
  };
  const onChange = (e) => setLocalSupport(e.target.value);

  return (
    <InputCard
      next={next}
      previous={previous}
      title="How well do you feel supported?"
      placeholder="I understand.."
      value={localSupport}
      setValue={onChange}
      required
    />
  );
}
