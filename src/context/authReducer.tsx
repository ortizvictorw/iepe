import {AuthState} from './AuthContext';

//Actions type
type AuthAction = {
  type: 'singIn';
};

export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'singIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yet',
      };
    default:
      return state;
  }
};
