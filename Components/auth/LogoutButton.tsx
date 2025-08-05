import { authService } from "../../Services/AuthService"

export default function LogoutButton() {
  const handleLogout = () => {
    authService.logout();
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
    >
      Logout
    </button>
  );
}