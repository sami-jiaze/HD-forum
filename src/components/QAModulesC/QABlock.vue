<template>
  <div class="issue-box">
    <div>
      <el-input
        v-model="textValue"
        :autosize="{ minRows: 3 }"
        placeholder="write..."
      >
      </el-input>
    </div>
    <div class="footer">
      <div class="tool">
        <emojiVue @getEmoji="getEmoji">
          <template #default>
            <span><i-bx-smile></i-bx-smile> 表情</span>
          </template>
        </emojiVue>
        <!-- <span @click="eventDelegation">
          <i class="fa fa-picture-o"></i>图片
          <input
            type="file"
            id="uploadInput"
            ref="dom"
            @change="changeInput"
            style="display: none"
          />
        </span> -->
      </div>
      <div class="button">
        <el-button type="primary" size="small" @click="publish">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import emojiVue from "../../views/Ask/components/emoji.vue";

const textValue = ref("I want to ask...");
const dom = ref();
const fileList = ref([]);

const getEmoji = (data) => {
  textValue.value += data;
};

function publish() {
  console.log(textValue.value);
}
</script>

<style lang="scss" scoped>
.issue-box {
  width: 100%;
  background: white;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 2px;
  :deep(.el-textarea__inner) {
    background-color: #f4f5f5;
    resize: none;
    border-width: 0px;
    border-radius: 0px;
    border-style: none;
    border: none;
    outline: none;
  }

  .footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tool {
      display: flex;
      align-items: center;
      span {
        margin-right: 20px;
        cursor: pointer;
        color: #4e5969;
        font-size: 14px;
      }
      i {
        margin-right: 2px;
      }
    }
    :deep(.el-button--primary) {
      background: #1e80ff;
      padding: 0px 20px;
      font-size: 14px;
    }
  }
}
</style>
