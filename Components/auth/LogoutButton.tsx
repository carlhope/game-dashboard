import { authService } from "../../Services/AuthService";
import { useAuth } from "../../Contexts/AuthContext";




export default function LogoutButton() {

const { setIsAuthenticated} = useAuth();
  const handleLogout = async () => {
    console.log("Logging out...");
    try {
      const success = await authService.logout();
      if (success) {
        alert("Logout successful");
        setIsAuthenticated(false);
      } else {
        alert("Logout failed: Server returned error");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
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