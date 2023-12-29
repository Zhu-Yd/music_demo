<template>
  <div>
    <input type="text" v-model="s_name">
    <span>子组件的name：{{name}}</span>
  </div>
</template>

<script>
export default {
  name: "son",
  data:function (){
    return{
      s_name:this.name
    }
  },
  props:["name"],
  watch:{
    s_name:function (){
      this.$emit('name',this.s_name)
    }
  }
}
</script>

<style scoped>

</style>