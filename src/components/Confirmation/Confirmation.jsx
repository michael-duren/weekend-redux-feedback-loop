import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Confirmation() {
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.feedback);
  const onClick = () => {
    navigate('/feeling');
  };

  return (
    <div>
      {isLoading ? (
        <div className="text-8xl ">
          <div className="animate-spin">↻</div>
        </div>
      ) : !isError.error ? (
        <>
          <h2 className="mb-8 text-5xl font-bold leading-10">
            Successfully Submitted 🥳
          </h2>
          <p className="text-xl mb-8">
            Thanks for submitting! Leave another one if you would like
          </p>
          <button onClick={onClick} className="btn btn-primary">
            Leave New Feedback
          </button>
        </>
      ) : (
        <>
          <h2 className="mb-8 text-5xl font-bold leading-10">
            We ran into a problem 😢
          </h2>
          <p className="text-xl mb-8">Error: {isError.message}</p>
          <button onClick={onClick} className="btn btn-primary">
            Leave New Feedback
          </button>
        </>
      )}
    </div>
  );
}
