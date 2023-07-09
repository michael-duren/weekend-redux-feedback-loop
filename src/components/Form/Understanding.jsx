import InputCard from './InputCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Understanding() {
  const navigator = useNavigate();
  const [understanding, setUnderstanding] = useState('');
  const onClick = () => navigator('/support');
  const onChange = (e) => setUnderstanding(e.target.value);

  return (
    <InputCard
      onClick={onClick}
      title="How well are you understanding the material?"
      placeholder="I understand.."
      value={understanding}
      setValue={onChange}
      required
    />
  );
}
