import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputCard from './InputCard';

export default function Support() {
  const navigator = useNavigate();
  const [support, setSupport] = useState('');
  const onClick = () => navigator('/comments');
  const onChange = (e) => setSupport(e.target.value);

  return (
    <InputCard
      onClick={onClick}
      title="How well do you feel supported?"
      placeholder="I understand.."
      value={support}
      setValue={onChange}
      required
    />
  );
}
