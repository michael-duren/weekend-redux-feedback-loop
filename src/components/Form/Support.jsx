import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputCard from './InputCard';
import { useDispatch } from 'react-redux';
import { setNewFeedback } from '../../store/slices/feedbackSlice';

export default function Support() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [localSupport, setLocalSupport] = useState('');
  const onClick = () => {
    dispatch(setNewFeedback({ support: localSupport }));
    navigator('/comments');
  };
  const onChange = (e) => setLocalSupport(e.target.value);

  return (
    <InputCard
      onClick={onClick}
      title="How well do you feel supported?"
      placeholder="I understand.."
      value={localSupport}
      setValue={onChange}
      required
    />
  );
}
