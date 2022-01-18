<template>
<div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
<!--  遍历td的方法-->
  <table v-for="(table, index) in paramInfo.sizes" class="info-size" :key="index">
<tr v-for="(tr,index) in table" :key="index">
  <td v-for="(td, index) in tr" :key="index">
    {{td}}
  </td>
</tr>

</table>
 </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
