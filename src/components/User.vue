<template>
  <div>
    <div>
      firstName:
      <input type="text" :value="firstName" @input="onChangeFirName" />
    </div>
    姓名:{{ userName }} 性别:{{ SEX[sex] }} 年龄:{{ age }}
    <button @click="changeAge(id)">加1</button>
    <button @click="remove(id)">删除</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Model } from "vue-property-decorator";
enum Sex {
  "男" = 1,
  "女" = 0,
}
@Component({
  name: "User",
})
export default class User extends Vue {
  SEX: any = Sex;
  get userName() {
    return this.name;
  }

  @Model("changeFirstName", { type: String })
  firstName!: string;

  @Prop(Number)
  id!: number;
  @Prop([String, Number])
  name!: string | number;
  @Prop({ type: Number })
  age!: number;
  @Prop({ type: Number, default: 1 })
  sex!: number;
  @Emit("on-remove")
  remove(id: number) {
    // return id;
  }

  @Emit()
  changeAge(id: number) {
    // change-age;
  }
  @Emit("changeFirstName")
  onChangeFirName(e: any) {
    return e.target.value;
  }
}
</script>