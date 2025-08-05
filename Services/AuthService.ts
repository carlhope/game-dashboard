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

export const authService = {
  async register(payload: RegisterPayload) {
    const res = await axios.post('/register', payload);
    return res.data;
  },

  async login(payload: LoginPayload) {
    const res = await axios.post('/login', payload);
    const token = res.data.token;
    localStorage.setItem('token', token);
    return token;
  },

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  },

  getToken() {
    return localStorage.getItem('token');
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};