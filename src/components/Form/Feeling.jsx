import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputCard from './InputCard';
import { useDispatch } from 'react-redux';
import { setFeeling } from '../../store/slices/feedbackSlice';

export default function Feeling() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [localFeeling, setLocalFeeling] = useState('');
  const onClick = () => {
    dispatch(setFeeling(localFeeling));
    navigator('/understanding');
  };
  const onChange = (e) => setLocalFeeling(e.target.value);

  return (
    <InputCard
      onClick={onClick}
      title="How are you feeling?"
      placeholder="I'm feeling..."
      value={localFeeling}
      setValue={onChange}
      required
    />
  );
}
