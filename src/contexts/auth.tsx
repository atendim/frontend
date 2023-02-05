import React, { createContext, useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { User } from '../models/User';
import { authenticate, register } from '../services/AuthService';
import { useToast } from './toast';
import { useLoader } from '../hooks/useLoader';

export type AuthContextData = {
  signed: boolean,
  user: User | null,
  signIn: (userData: User) => Promise<void>,
  signOut: () => void,
  signUp: (userData: User) => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<React.PropsWithChildren<{ userMock?: User }>> = ({ children, userMock }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();
  const { formatMessage } = useIntl();
  const { isLoading, setLoading } = useLoader()

  useEffect(() => {
    console.log("isLoading")
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setUser(JSON.parse(user))
    }
    
    if (userMock) {
      setUser(userMock)
    }
    
    setLoading(false)
  }, [])

  const signIn = async (user: User) => {
    setLoading(true)

    await authenticate(user)
      .then(resp => {
        setUser(resp.data);

        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("user", JSON.stringify(resp.data));
        
        setLoading(false)
        navigate('/home', { replace: true });
      })
      .catch(err => {
        setLoading(false)
        let messageCode = err?.response?.data?.messageCode;
        showError(formatMessage({id: `errors.${messageCode}`}))
      });
  }

  const signOut = () => {
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate('/login', { replace: true })
  }

  const signUp = async (user: User) => {
    setLoading(true)

    await register(user)
      .then(res => {  
        setLoading(false)
        navigate('/home', { replace: true });
        showSuccess(formatMessage({id: "messages.successfullyRegistered"}))
      })
      .catch(err => {
        setLoading(false)
        let {messageCode} = err?.response?.data;
        showError(formatMessage({id: `errors.${messageCode}`}))
      })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}