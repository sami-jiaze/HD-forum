<template>
  <el-form
    label-width="120px"
    :model="formRegister"
    style="max-width: 350px; margin-top: 15px"
  >
    <el-form-item label="Phone:">
      <el-input v-model="formRegister.phone" />
    </el-form-item>
    <el-form-item label="Password:">
      <el-input v-model="formRegister.password" />
    </el-form-item>
    <el-form-item label="Code:">
      <el-input v-model="vcode">
        <template #append>
          <el-button @click="getCode" :disabled="isdisabled">
            {{ btnText }}
          </el-button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>

  <div class="reg-button">
    <button @click="register(formRegister)">Register</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, type Ref } from "vue";
import type { loginForm } from "@/type/loginForm";
import { reqVerification, reqRegister } from "@/api/login";
import { ElMessage } from "element-plus";
import router from "@/router";

let isdisabled: Ref = ref(false);
let time = ref(5);
const btnText = ref("get the code");
let vcode: Ref<string> = ref("");
const formRegister = reactive<loginForm>({
  phone: "",
  password: "",
});

const getCode = async function () {
  if (!formRegister.phone) {
    ElMessage({
      message: "please input phone",
      type: "warning",
    });
    return;
  }
  const res = await reqVerification(formRegister.phone);
  console.log(res);
  if (res.code === 200) {
    vcode.value = res.result.VerificationCode;
    ElMessage({
      message: vcode.value,
      type: "success",
    });
  }
  let timer: any = null;
  isdisabled.value = true;
  if (isdisabled.value === true) {
    timer = setInterval(() => {
      btnText.value = `Retry after ${time.value} seconds`;
      time.value--;
      if (time.value < 0) {
        isdisabled.value = false;
        btnText.value = "get the code";
        time.value = 5;
        clearInterval(timer);
      }
    }, 1000);
  }
};
async function register(data: loginForm) {
  console.log(data);
  if (!data.phone || !data.password) {
    ElMessage({
      message: "please input message.",
      type: "error",
    });
  } else {
    const res = await reqRegister(data);
    console.log(res);
    if (res.data.code === 200) {
      ElMessage({
        message: "register successfully.",
        type: "success",
      });
    } else {
      ElMessage({
        message: "Mobile phone number is registered",
        type: "warning",
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.reg-button {
  margin: 0 auto;
  button {
    display: inline-block;
    width: 280px;
    height: 40px;
    background-color: rgb(0, 150, 94);
    color: white;
    border-radius: 5px;
  }
}
</style>
