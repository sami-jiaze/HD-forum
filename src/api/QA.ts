import { request } from "@/utils/requests";

// 获得QA
export function reqGetQAList() {
  return request({
    url: "CampusHelper/Post/QAColumn",
    method: "get",
  });
}
// 提问题
export function reqPostQA(data) {
  return request({
    url: "CampusHelper/Post/publish",
    method: "post",
    data: data,
  });
}
// 删除问题
export function reqDelQA(id) {
  return request({
    url: "CampusHelper/Post/delete",
    method: "delete",
    params: { id },
  });
}
