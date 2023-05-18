import { AUTH_ACTIONS } from '@/redux/action-types';
import { UserModel } from '@/resources/models';

export const setAccessToken = (accessToken: string | null) => ({
  type: AUTH_ACTIONS.SET_TOKEN,
  payload: { accessToken },
});

export const setAccount = (account: UserModel | null) => ({
  type: AUTH_ACTIONS.SET_ACCOUNT,
  payload: { account },
});
