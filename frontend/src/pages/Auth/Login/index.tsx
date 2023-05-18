import React, { useState } from "react";
import { Input } from "@/components/Forms";
import { AuthApi } from "@/api";
import { useSetAccessTokenAction } from "@/hooks/redux";
import { Button } from "@/components/Atoms";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setAccessToken = useSetAccessTokenAction();

  const onSubmit = () => {
    if (email && password) {
      setLoading(true);
      AuthApi.login(email, password)
        .then(({ access_token }) => {
          setAccessToken(access_token);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  };

  return (
    <div className="w-full mx-auto sm:max-w-[500px] rounded-3 bg-white p-10 shadow-2xl">
      <h2 className="mb-10 text-center text-3xl">Sign In</h2>

      <p className="mb-4 text-base text-dark-blue-800">
        Sign in to your account
      </p>

      <Input
        className="mb-4"
        label="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        className="mb-10"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex items-center justify-end">
        <Button onClick={onSubmit} loading={loading} disabled={!email || !password}>
          Submit
        </Button>
      </div>
    </div>
  );
};
