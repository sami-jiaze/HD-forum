/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    // "prettier/prettier": "off"
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
    WeixinJSBridge: "readonly",
    ElMessage: "readonly",
    ElMessageBox: "readonly",
    ElLoading: "readonly",
  }
};
