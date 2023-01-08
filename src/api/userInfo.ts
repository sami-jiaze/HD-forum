import { request } from "@/utils/requests";

// 获取用户详情
export function reqGetUserInfo(data) {
  return request({
    url: "CampusHelper/getUser",
    method: "get",
    params: { token: data },
  });
}

// 修改用户详情
export function reqEditUserInfo(data, avatar) {
  return request({
    url: "CampusHelper/UserInformationSupplement",
    method: "post",
    params: data,
    data: avatar,
  });
}
// 获取用户文章
export function reqGetUserArticle() {
  return request({
    url: "CampusHelper/Post/myPosts?type=specialColumn",
    method: "get",
  });
}
// 获取用户问答
export function reqGetUserQA() {
  return request({
    url: "CampusHelper/Post/myPosts?type=QA",
    method: "get",
  });
}
