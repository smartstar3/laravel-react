import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { RootState } from "@/redux/reducers";
import { setAccount, setAccessToken } from "@/redux/actions";
import { UserModel } from "@/resources/models";
import { ACCESS_TOKEN_KEY } from "@/constants";

export const useAuthState = () =>
  useSelector(({ authReducer }: RootState) => authReducer);

export const useSetAccessTokenAction = () => {
  const dispatch = useDispatch();
  return (accessToken: string | null) => dispatch(setAccessToken(accessToken));
};

export const useSetAccountAction = () => {
  const dispatch = useDispatch();
  return (account: UserModel | null) => dispatch(setAccount(account));
};

export const useLogout = () => {
  const [,, deleteCookie] = useCookies([
    ACCESS_TOKEN_KEY,
  ]);
  const dispatch = useDispatch();

  return () => {
    dispatch(setAccessToken(null));
    deleteCookie(ACCESS_TOKEN_KEY);
  }
};
