import { useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const navigate = useNavigate();

  const onClick = () => navigate('/');

  return (
    <div>
      <header className="navbar bg-base-100">
        <h2 onClick={onClick} className="btn btn-ghost normal-case text-xl">
          Feedback
        </h2>
      </header>
      <div className="hero min-h-[80vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
