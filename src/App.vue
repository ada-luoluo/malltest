<template>
  <div id="App">
    <router-view/>
    <mainTabbar/>
  </div>
</template>

<script>
import mainTabbar from "@/components/content/mainTabbar/mainTabbar";

export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/layui.css";
</style>
