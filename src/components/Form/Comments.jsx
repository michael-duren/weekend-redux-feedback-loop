import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputCard from './InputCard';

export default function Comments() {
  const navigator = useNavigate();
  const [comments, setComments] = useState('');
  const onClick = () => navigator('/review');
  const onChange = (e) => setComments(e.target.value);

  return (
    <InputCard
      onClick={onClick}
      title="Any Comments? Leave Below"
      placeholder="I feel..."
      value={comments}
      setValue={onChange}
      text
    />
  );
}
