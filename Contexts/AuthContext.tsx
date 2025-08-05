import React, { createContext, useContext, useEffect, useState } from 'react';
import axios, {AxiosError} from 'axios';

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

const [loading, setLoading] = useState(true);

useEffect(() => {
  const refreshToken = async () => {
    try {
      const res = await axios.post('http://localhost:3001/auth/refresh', {}, {
        withCredentials: true,
      });

      setAccessToken(res.data.accessToken);
      setIsAuthenticated(true);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          // Expected — user is logged out
          setAccessToken(null);
          setIsAuthenticated(false);
        } else {
          console.error("Unexpected Axios error:", err.message);
        }
      } else {
        console.error("Non-Axios error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  refreshToken();
}, []);

  return (
   <AuthContext.Provider
  value={{
    isAuthenticated,
    setIsAuthenticated, // ✅ Add this
    accessToken,
    setAccessToken,
    loading,
    setLoading,
  }}
>
  {children}
</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};