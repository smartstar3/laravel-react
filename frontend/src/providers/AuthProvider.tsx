import React, { FC, ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ACCESS_TOKEN_KEY } from "@/constants";
import { SvgIcon } from "@/components/Atoms";
import {
  useAuthState,
  useSetAccountAction,
  useSetAccessTokenAction,
} from "@/hooks/redux";
import { AuthApi } from "@/api";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [cookies, setCookie, deleteCookie] = useCookies([
    ACCESS_TOKEN_KEY,
  ]);
  const [loading, setLoading] = useState(true);
  const setAccessToken = useSetAccessTokenAction();
  const setAccount = useSetAccountAction();
  const { account, accessToken } = useAuthState();

  useEffect(() => {
    setAccessToken(cookies[ACCESS_TOKEN_KEY]);
  }, []);

  useEffect(() => {
    if (!accessToken && !cookies[ACCESS_TOKEN_KEY]) {
      setAccount(null);
      setLoading(false);
      deleteCookie(ACCESS_TOKEN_KEY);
      return;
    }

    if (accessToken && !account) {
      AuthApi.getAccount()
        .then((res) => {
          setLoading(false);
          setAccount(res);
          setCookie(ACCESS_TOKEN_KEY, accessToken);
        })
        .catch(() => {
          setLoading(false);
          setAccessToken(null);
          deleteCookie(ACCESS_TOKEN_KEY);
        })
    }
  }, [accessToken, account]);

  if (loading) {
    return (
      <div className="absolute z-50 flex h-screen w-screen items-center justify-center bg-white">
        <SvgIcon className="h-30 w-30 animate-spin" name="spinner" />
      </div>
    );
  }

  return <>{children}</>;
};
