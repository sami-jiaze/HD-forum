<template>
  <!-- 个人中心页面首部 -->
  <HeaderVue>
    <template v-slot:right>
      <LoggedNavVue></LoggedNavVue>
    </template>
  </HeaderVue>
  <div class="container">
    <!-- 个人中心用户相关页面区域 -->
    <div class="user-container wrapper">
      <div class="user-detail">
        <div class="user-head-box">
          <div class="user-head">
            <img :src="userMessage.avatar" alt="" class="uimg" />
          </div>
          <div class="name-sign">
            <ul>
              <li class="username">{{ userMessage.name }}</li>
              <li class="usersign">{{ userMessage.signature }}</li>
            </ul>
          </div>
        </div>
        <div class="otherdetail">
          <ul>
            <li>gender： man</li>
            <li>email：{{ userMessage.email }}</li>
          </ul>
        </div>
      </div>
      <div class="setdetail">
        <button @click="dialogFormVisible = true">Editorial information</button>
      </div>
    </div>
    <!-- 主页关注粉丝之类的信息 -->
    <div class="nav wrapper">
      <div class="nav-left">
        <ul class="nav">
          <li @click="componentName = ConcernList">my articles</li>
          <li @click="goqa">my questions</li>
        </ul>
      </div>
      <div class="nav-right">
        <ul class="fans">
          <li>
            <a href="javascript:;">following</a>
            <span>100</span>
          </li>
          <li>
            <a href="javascript:;">followers</a>
            <span>1000</span>
          </li>
          <li>
            <a href="javascript:;">likes</a>
            <span>1000</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 显示个人一些相关信息 -->
    <div class="qa-content-left">
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>
    </div>

    <!-- 编辑个人信息 -->
    <el-dialog title="Editorial information" v-model="dialogFormVisible">
      <el-form ref="ruleForm" style="width: 80%" :model="editForm">
        <el-form-item label="Nickname" label-width="100px">
          <el-input v-model="editForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Email" label-width="100px">
          <el-input v-model="editForm.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Signature" label-width="100px">
          <el-input v-model="editForm.signature" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Avatar" label-width="100px">
          <el-upload
            action=""
            :on-change="handleelchange"
            :auto-upload="false"
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div style="display: flex; justify-content: end">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import LoggedNavVue from "@/components/LoggedNav.vue";
import HeaderVue from "@/layout/Header.vue";
import { ref, reactive, shallowRef } from "vue";
import { reqGetUserInfo, reqEditUserInfo } from "@/api/userInfo";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import type { EditForm } from "@/type/editForm";
import { reqGetUserQA, reqGetUserArticle } from "@/api/userInfo";
import ConcernList from "./components/ConcernList.vue";
import QAList from "./components/QAList.vue";
const userStore = useUserStore();
userStore.getuToken();

const editForm = reactive<EditForm>({
  token: userStore.token,
  name: "",
  email: "",
  signature: "",
});
const formData = new FormData();
const dialogFormVisible = ref(false);
const userMessage = ref({});

let componentName = shallowRef(ConcernList);
// 更新用户信息
async function confirm() {
  const res = await reqEditUserInfo(editForm, formData);
  // console.log(res);
  if (res.data.code == 200) {
    ElMessage({
      message: "Editorial successfully.",
      type: "success",
    });
    getUserInfo();
  }
  dialogFormVisible.value = false;
}
// 获取用户信息
async function getUserInfo() {
  const res = await reqGetUserInfo(userStore.token);
  if (res.data.code == 200) {
    userMessage.value = res.data.result;
  }
}
function handleelchange(imgfile) {
  formData.append("avatar", imgfile.raw);
  // console.log(file.value);
}

function goqa() {
  componentName.value = QAList;
}
getUserInfo();
</script>

<style lang="scss" scoped>
.container {
  // background-color: pink;
  background-color: #e9ecef;
  min-height: calc(100vh - 40px);
  overflow: hidden;

  .user-container {
    background-color: white;
    height: 150px;
    border: 1px solid rgb(149, 227, 208);
    display: flex;
  }
}

.user-detail {
  flex: 1;
}

.wrapper {
  width: 1200px;
  margin: 30px auto 0px;
}

.uimg {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  max-height: 100%;
}

.setdetail {
  margin-top: 60px;
  margin-right: 30px;
}

.setdetail button {
  height: 30px;
  border: 1px solid rgb(195, 192, 192);
  color: rgb(195, 192, 192);
  background-color: white;
  border-radius: 5px;
}

.setdetail button:hover {
  background-color: grey;
}

.user-head-box {
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
}

.name-sign {
  margin-left: 10px;
}

.username {
  font-weight: bold;
}

.usersign {
  margin-top: 10px;
  color: rgb(200, 176, 176);
  font-size: 10px;
}

.otherdetail {
  margin-left: 20px;
}

.nav {
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
}

.nav-right {
  width: 350px;
  // background-color: pink;
  text-align: center;
  margin-right: 20px;

  .fans {
    display: flex;
    justify-content: space-around;

    & a:hover {
      color: skyblue;
    }
  }

  .fans li {
    margin-left: 15px;
    margin-right: 5px;
    display: flex;
    flex-direction: column;

    & span {
      font-size: 10px;
      color: rgb(195, 192, 192);
    }
  }
}
.nav {
  display: flex;
  & li:hover {
    color: rgb(45, 167, 120);
    cursor: pointer;
  }
}

.nav li {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 15px;
  font-weight: bold;
}

.nav a {
  display: block;
}

.router-link-active {
  background-color: blue;
}
</style>
