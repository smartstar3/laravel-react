import { AUTH_ACTIONS } from '../action-types';
import { UserModel } from '@/resources/models';
import { ROLE } from '@/resources/enums';

export interface AuthState {
  accessToken: string | null;
  account: UserModel | null;
  currentRole: ROLE | undefined;

  loadingAccount: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  account: null,
  currentRole: undefined,
  loadingAccount: true,
};

const authReducer = (state: AuthState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTIONS.SET_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
      };

    case AUTH_ACTIONS.GET_ACCOUNT_REQUEST:
      return {
        ...state,
        loadingAccount: true,
      };

    case AUTH_ACTIONS.SET_ACCOUNT:
      return {
        ...state,
        account: payload.account,
        loadingAccount: false,
      };

    case AUTH_ACTIONS.GET_ACCOUNT_ERROR:
      return {
        ...state,
        loadingAccount: false,
      }

    case AUTH_ACTIONS.SET_ACCOUNT_LOADING:
      return {
        ...state,
        loadingAccount: payload.loading,
      }

    case AUTH_ACTIONS.SET_CURRENT_ROLE:
      return {
        ...state,
        currentRole: payload.role
      }

    default:
      return state;
  }
};

export default authReducer;
