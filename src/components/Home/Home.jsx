import { useNavigate, useNavigation } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/feeling');
  };

  return (
    <div className="">
      <h1 className="text-7xl font-bold">Leave Feedback</h1>
      <p className="text-xl py-6 ">Don't forget it!</p>
      <button onClick={onClick} className="btn btn-lg btn-primary">
        Get Started
      </button>
    </div>
  );
}
