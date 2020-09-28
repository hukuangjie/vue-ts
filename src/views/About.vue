<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <p>{{ fullName }}</p>
    <button @click="modifyFullname">修改fullname</button>
  </div>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component({})
export default class About extends Vue {
  // 初始数据可以直接声明为实例的 property
  firstName = "zhang";
  lastName = "san";

  // 组件方法也可以直接声明为实例的方法
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(val) {
    const arr = val.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
  modifyFullname() {
    this.fullName = "li si";
  }

  @Watch("firstName")
  onFirstNameChange(oldVal: string, newVal: string) {
    console.log(oldVal, newVal);
  }
}
</script>
