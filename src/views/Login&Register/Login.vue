<template>
  <el-form
    label-width="120px"
    :model="formLabelAlign"
    style="max-width: 350px; margin-top: 15px"
    :rules="login_rules"
    ref="loginFormRef"
    status-icon
    hide-required-asterisk
  >
    <el-form-item label="Phone:" prop="phone" autocomplete="off">
      <el-input v-model="formLabelAlign.phone" />
    </el-form-item>
    <el-form-item label="Password:" prop="password">
      <el-input v-model="formLabelAlign.password" />
    </el-form-item>
  </el-form>
  <div class="log-button">
    <el-button @click="submitForm(loginFormRef)">Login</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useUserStore } from "@/stores/user";
import type { loginForm } from "@/type/loginForm";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { reqLogin } from "@/api/login";
import router from "@/router";

const formLabelAlign = reactive<loginForm>({
  phone: "10086",
  password: "1234",
});
const loginFormRef = ref<FormInstance>();

const userStore = useUserStore();

const submitForm = (formEl: FormInstance | undefined) => {
  // console.log(formEl);
  if (!formEl) return;
  formEl.validate(async (valid: boolean) => {
    if (valid) {
      const res = await reqLogin(formLabelAlign);
      console.log(res);
      if (res.data.code === 200) {
        ElMessage({
          message: "Log in successfully.",
          type: "success",
        });
        userStore.setToken(res.data.result.token);
        router.push({ path: "/homePage", replace: true });
      }
    } else {
      return false;
    }
  });
};

const login_rules: FormRules = reactive({
  phone: [
    {
      required: true,
      message: "User name cannot be empty",
      trigger: "blur",
    },
    {
      min: 2,
      max: 8,
      message: "Please enter the correct phone number",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "password name cannot be empty",
      trigger: "blur",
    },
  ],
});
</script>

<style lang="scss" scoped>
.log-button {
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
