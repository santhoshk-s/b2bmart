import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Backend_url } from '../constant';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${Backend_url}/api/auth/login`, { email, password });
      const { user, token } = response.data;

      // Store the entire user object and token in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      if (token) {
        localStorage.setItem('token', token);
      }

      // Update state
      setUser(user);
      setRole(user.role);

      // Redirect based on user role
      if (user.role === 'user' || user.role ==='admin') {
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const register = async (username, email, password, contactNo) => {
    try {
      const response = await axios.post(`${Backend_url}/api/auth/register`, { username, email, password, contactNo });
      const { user } = response.data;

      // Store user data
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setRole(user.role);

      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${Backend_url}/api/auth/logout`);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setUser(null);
      setRole(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
