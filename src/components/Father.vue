<template>
<div>
  <Son :name="name" @name="s_name"></Son>
  <span>父组件的name：{{name}}</span>
</div>
</template>

<script>
import Son from "@/components/Son";
export default {
  name: "father",
  data:function (){
    return{
      name:'test'
    }
  },
  components:{Son},
  methods:{
    s_name:function (val){
      this.name=val
    }
  }
}
</script>

<style scoped>

</style>