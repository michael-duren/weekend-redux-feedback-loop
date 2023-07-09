import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputCard from './InputCard';
import { useDispatch } from 'react-redux';
import { setComments } from '../../store/slices/feedbackSlice';

export default function Comments() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [localComments, setLocalComments] = useState('');
  const onClick = () => {
    dispatch(setComments(localComments));
    navigator('/review');
  };
  const onChange = (e) => setLocalComments(e.target.value);

  return (
    <InputCard
      onClick={onClick}
      title="Any Comments? Leave Below"
      placeholder="I feel..."
      value={localComments}
      setValue={onChange}
      text
    />
  );
}
