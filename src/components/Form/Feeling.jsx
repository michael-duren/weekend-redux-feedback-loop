import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputCard from './InputCard';

export default function Feeling() {
  const navigator = useNavigate();
  const [feeling, setFeeling] = useState('');
  const onClick = () => navigator('/understanding');
  const onChange = (e) => setFeeling(e.target.value);

  return (
    <InputCard
      onClick={onClick}
      title="How are you feeling?"
      placeholder="I'm feeling..."
      value={feeling}
      setValue={onChange}
      required
    />
  );
}
