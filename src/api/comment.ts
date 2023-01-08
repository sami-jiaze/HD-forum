import { request } from "@/utils/requests";

//  添加评论
export function reqPostComment(data) {
  return request({
    url: "CampusHelper/Comment/addComment",
    method: "post",
    data: data,
  });
}

// 获取评论
export function reqGetComment(id) {
  return request({
    url: "CampusHelper/Comment/getComment",
    method: "get",
    params: { postId: id },
  });
}

// 添加评论的评论
export function reqAddComment(data) {
  return request({
    url: "CampusHelper/Comment/addComment",
    method: "post",
    data,
  });
}
