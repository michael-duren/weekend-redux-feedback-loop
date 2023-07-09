import { useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/feeling');
  };

  return (
    <div>
      <h2 className="mb-8 text-5xl font-bold leading-10">
        Successfully Submitted 🥳
      </h2>
      <p className="text-xl mb-8">
        Thanks for submitting! Leave another one if you would like
      </p>
      <button onClick={onClick} className="btn btn-primary">
        Leave New Feedback
      </button>
    </div>
  );
}
