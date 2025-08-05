import { Outlet } from 'react-router-dom';
import LoginButton from './auth/LoginButton';
import RegisterButton from './auth/RegisterButton';
import LogoutButton from './auth/LogoutButton';
import { useAuth } from '../Contexts/AuthContext';


const Layout = () => {
  const {isAuthenticated, loading} = useAuth();
  if (!loading) {
  return (
    <div>
      <header className="p-4 bg-gray-100">
        <nav className="flex gap-4">
          {!isAuthenticated ? (
            <>
              <LoginButton />
              <RegisterButton />
            </>
          ) : (
            <LogoutButton />
          )}
        </nav>
      </header>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
else{
  return(<>
  <h1>Loading</h1>
  </>)
}
};

export default Layout;