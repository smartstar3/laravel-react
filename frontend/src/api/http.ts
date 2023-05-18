import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { API_URL } from "@/constants/config";
import store from "@/redux/store";

const http = axios.create({ baseURL: API_URL });

const request = (method: Method, url: string, options: AxiosRequestConfig) => {
  const {
    authReducer: { accessToken },
  } = store.getState();

  if (accessToken) {
    options = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  return http
    .request({
      ...options,
      method,
      url,
    })
    .then(httpResponseHandler)
    .catch(httpErrorHandler);
};

const httpResponseHandler = (response: AxiosResponse) => {
  return response.data;
};

const httpErrorHandler = async (err: any) => {
  const response = err?.response;
  const data = response?.data;

  throw {
    ...data,
    message: data?.message || "Network Error!",
  };
};

export const Http = {
  get(url: string, params = {}, headers = { lang: 'en' }) {
    return request("GET", url, { params, headers });
  },
  post(url: string, body = {}, headers = { lang: 'en' }) {
    return request("POST", url, { data: body, headers });
  },
  put(url: string, body = {}, headers = { lang: 'en' }) {
    return request("PUT", url, { data: body, headers });
  },
  patch(url: string, body = {}, headers = { lang: 'en' }) {
    return request("PATCH", url, { data: body, headers });
  },
  delete(url: string, body = {}, headers = { lang: 'en' }) {
    return request("DELETE", url, { data: body, headers });
  },
};
