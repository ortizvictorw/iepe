import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

//define interface
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

//initialState
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

//provider context interface
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

//Create Context
export const AuthContext = createContext({} as AuthContextProps);

//provider state HOC

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'singIn'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
