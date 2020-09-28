<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <p>{{ fullName }}</p>
    <button @click="modifyFullname">修改fullname</button>

    <hr />

    <user
      @change-age="changeAge"
      @on-remove="remove"
      v-model="firstName"
      v-for="item in userList"
      v-bind="item"
      :key="item.id"
    ></user>
  </div>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import User from "../components/User.vue";
/**
 * vue-property-decorator 装饰器
 * @Component
 * @Watch
 * @Prop
 * @Model
 * @Emit
 */
interface AIUser {
  id: number;
  name: string | number;
  age: number;
  sex?: number;
}

@Component({
  components: {
    User,
  },
})
export default class About extends Vue {
  // 初始数据可以直接声明为实例的 property
  firstName = "zhang";
  lastName = "san";
  userList: Array<AIUser> = [
    {
      id: 1,
      name: "zhangsan",
      age: 20,
      sex: 1,
    },
    {
      id: 2,
      name: "lisi",
      age: 22,
      sex: 0,
    },
    {
      id: 3,
      name: "wangwu",
      age: 12,
    },
  ];

  // 组件方法也可以直接声明为实例的方法
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(val) {
    const arr = val.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
  remove(id: number) {
    // console.log(id);
    const index: number = this.userList.findIndex((user) => user.id === id);
    this.userList.splice(index, 1);
  }
  changeAge(id: number) {
    const user: AIUser | undefined = this.userList.find(
      (user) => user.id === id
    );
    user && user.age++;
  }
  modifyFullname() {
    this.fullName = "li si";
  }

  @Watch("firstName")
  onFirstNameChange(newVal: string, oldVal: string) {
    console.log(newVal, oldVal);
  }
  created() {
    this.fullName = "wang wu";
  }
  mounted() {
    this.fullName = "zhao liu";
  }
}
</script>
