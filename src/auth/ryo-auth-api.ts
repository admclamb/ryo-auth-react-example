import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "./api-response-model";
import { ErrorModel } from "./error-model";
import { Account } from "./account-model";

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL ?? "",
  timeout: 30_000,
});

const connection = "Username-Password-Authentication";

const callExternalApi = async <T>(options: {
  config: AxiosRequestConfig;
}): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse = await axiosApi(options.config);
    const { data } = response;

    return [data, null];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.message === "Request aborted" || error.message === "canceled") {
        return [null, null];
      }
      const axiosError = error as AxiosError;

      const { response } = axiosError;

      let message = "http request failed";

      if (response && response.statusText) {
        message = response.statusText;
      }

      if (axiosError.message) {
        message = axiosError.message;
      }

      if (response && response.data && (response.data as ErrorModel).message) {
        message = (response.data as ErrorModel).message;
      }

      return [
        null,
        {
          message,
        },
      ];
    }

    return [
      null,
      {
        message: (error as Error).message,
      },
    ];
  }
};

const login = (
  email: string,
  password: string
): Promise<ApiResponse<Account>> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/account/login",
    method: "POST",
    data: {
      email,
      password,
    },
    withCredentials: true,
  };

  return callExternalApi<Account>({ config });
};

const signup = (
  email: string,
  password: string
): Promise<ApiResponse<Account>> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/account",
    method: "POST",
    data: {
      email,
      password,
      connection,
    },
    withCredentials: true,
  };

  return callExternalApi<Account>({ config });
};

const getProfile = (): Promise<ApiResponse<Account>> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/account/profile",
    withCredentials: true,
  };

  return callExternalApi<Account>({ config });
};

const getAccessToken = (): Promise<ApiResponse<{ accessToken: string }>> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/account/access-token",
    withCredentials: true,
  };

  return callExternalApi<{ accessToken: string }>({ config });
};

const api = { login, signup, getProfile, getAccessToken };

Object.freeze(api);
export default api;
