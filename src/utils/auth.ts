const tokenkey = "token";

// 存储token
export function setToken(token: string) {
  return sessionStorage.setItem(tokenkey, token);
}

// 取出token
export function getToken() {
  return sessionStorage.getItem(tokenkey);
}

// 删除token
export function removeToken() {
  return sessionStorage.removeItem(tokenkey);
}
