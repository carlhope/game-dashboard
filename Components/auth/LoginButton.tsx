import { useNavigate } from 'react-router-dom';

export default function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
    >
      Login
    </button>
  );
}