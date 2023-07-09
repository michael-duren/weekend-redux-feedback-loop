import { useNavigate, useNavigation } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/feeling');
  };

  return (
    <>
      <h1 className="text-5xl font-bold">Leave Feedback</h1>
      <p className="py-6">Don't forget it!</p>
      <button onClick={onClick} className="btn btn-primary">
        Get Started
      </button>
    </>
  );
}
