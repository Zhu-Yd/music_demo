<template>
  <div>
    <van-nav-bar :title="bar_title" left-arrow @click-left="onClickLeft" @click-right="onClickRight" fixed>
      <template #right>
        <van-icon name="search" size="18"/>
      </template>
    </van-nav-bar>
    <div class="main">
      <router-view></router-view>
    </div>
    <van-tabbar route active-color="#ee0a24" inactive-color="#000" v-model="active">
      <van-tabbar-item replace to="/layout/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "index",
  data: function () {
    return {
      active: 0,
      bar_title: this.$route.meta.title
    }
  },
  methods: {
    onClickLeft: function () {
      Toast('返回')
    },
    onClickRight: function () {
      if (this.active !== 1) {
        this.active = 1
        this.$router.push('/layout/search')
      }
    }
  },
  watch: {
    active: function () {
      // console.log(this.$route.meta.title)
      this.bar_title = this.$route.meta.title
      // if (this.active === 0) this.bar_title = '首页'
      // if (this.active === 1) this.bar_title = '搜索'
    }
  }
}
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>