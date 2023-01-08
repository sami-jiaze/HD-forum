import { request } from "@/utils/requests";

// 获得专栏
export function reqGetHomePage() {
  return request({
    url: "CampusHelper/Post/homepage",
    method: "get",
    // params: data,
  });
}

// 文章详情
export function reqscDetail(data: string) {
  return request({
    url: "CampusHelper/Post/selectById",
    method: "get",
    params: { id: data },
  });
}

// 发布文章
export function reqPostArticle(data) {
  return request({
    url: "CampusHelper/Post/publish",
    method: "post",
    data: data,
  });
}
