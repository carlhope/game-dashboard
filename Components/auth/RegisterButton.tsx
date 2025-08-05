
import { useNavigate } from 'react-router-dom';
export default function RegisterButton() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/login');
  }
  return (
    <button type='button'
      onClick={handleRegister}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
    >
      Register
    </button>
  );
}