import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type User = {
  id: string;
  name: string;
  email: string;
  gender?: string;
  age?: number;
  lifestyle?: string;
} | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: SignupData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

type SignupData = {
  name: string;
  email: string;
  password: string;
  gender: string;
  age: number;
  lifestyle: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored auth token and user
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Make the actual API call if you want to use real data
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      
      const userData = {
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      throw new Error('Login failed');
    }
  };
  
  const signup = async (userData: SignupData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', userData);

      localStorage.setItem("token",response.data.token);
      
      // After successful signup, log the user in
      await login(userData.email, userData.password);
    } catch (error) {
      throw new Error('Signup failed');
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}