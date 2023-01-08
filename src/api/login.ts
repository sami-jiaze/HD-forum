import { request } from "@/utils/requests";
import type { loginForm } from "@/type/loginForm";

// 登录接口
export function reqLogin(data: loginForm) {
  return request({
    url: "CampusHelper/UserLogin",
    method: "post",
    params: data,
  });
}

// 验证手机
export function reqVerification(phone: any) {
  return request({
    url: "CampusHelper/SMSVerification",
    method: "get",
    params: { phone },
  });
}

// 注册
export function reqRegister(data: loginForm) {
  return request({
    url: "/CampusHelper/userRegister",
    method: "post",
    params: data,
  });
}
