import axios from 'axios';

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

const API = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true, // 🔑 sends cookies automatically
});

export const authService = {
  async register(payload: RegisterPayload) {
    const res = await API.post('/auth/register', payload);
    return res.data;
  },

  async login(payload: LoginPayload) {
    await API.post('/auth/login', payload);
  },

  async logout(): Promise<boolean> {
    try {
      const res = await API.post('/auth/logout');
      return res.status === 200;
    } catch (err) {
      console.error("Logout failed:", err);
      return false;
    }
  },

  async refresh(): Promise<string | null> {
    try {
      const res = await API.post('/auth/refresh');
      return res.data.accessToken || null;
    } catch (err) {
      console.error("Refresh failed:", err);
      return null;
    }
  }
};