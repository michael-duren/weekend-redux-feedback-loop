import InputCard from './InputCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUnderstanding } from '../../store/slices/feedbackSlice';

export default function Understanding() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [localUnderstanding, setLocalUnderstanding] = useState('');
  const onClick = () => {
    dispatch(setUnderstanding(localUnderstanding));
    navigator('/support');
  };
  const onChange = (e) => setLocalUnderstanding(e.target.value);

  return (
    <InputCard
      onClick={onClick}
      title="How well are you understanding the material?"
      placeholder="I understand.."
      value={localUnderstanding}
      setValue={onChange}
      required
    />
  );
}
