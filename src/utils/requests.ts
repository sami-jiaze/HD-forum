import axios from "axios";
import { ElNotification } from "element-plus";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
userStore.getuToken();
// 请求超时时间
const TIMEOUT = 4000;
// 创建 axios 实例
export const request = axios.create({
  baseURL: "http://davis-lee.cn:9934/",
  timeout: TIMEOUT,
});

// request拦截器
request.interceptors.request.use(
  (request) => {
    if (userStore.token) {
      request.headers.token = userStore.token;
    }
    // request.headers = {
    //   ...request.headers,
    //   token: token as unknown as string,
    // };
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);
// respone拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // ElNotification({
    //   title: "Warning",
    //   message: "This is a warning message",
    //   type: "warning",
    // });
    return Promise.reject(error);
  }
);

declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}

export default request;
