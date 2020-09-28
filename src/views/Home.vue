<!--
 * @Author: your name
 * @Date: 2020-09-28 22:11:05
 * @LastEditTime: 2020-09-28 23:24:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sxh\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  // components: {
  //   HelloWorld,
  // },
})
export default class Home extends Vue {}
</script>
