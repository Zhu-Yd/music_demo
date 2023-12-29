<template>
  <div>
    <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" @input="input_fn"/>
    <div class="search_wrap" v-if="search_list.length===0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <div class="hot_item" v-for="(obj,index) in hot_list" :key="index" @click="hot_fn(obj.first)">{{ obj.first }}
        </div>
      </div>
    </div>
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>

      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <van-cell-group inset>
          <van-cell center :title="obj.name" :label="`${obj.ar[0].name} - ${obj.name}`"
                    v-for="obj in search_list" :key="obj.id">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
              <van-icon name="play-circle-o" size="0.7rem" @click="to_song(obj.id)"/>
            </template>
          </van-cell>
        </van-cell-group>
      </van-list>

    </div>
  </div>
</template>

<script>
import {hotSearchAPI, doSearchAPI} from "@/api";

export default {
  name: "index",
  async created() {
    const res = await hotSearchAPI()
    // console.log(res)
    this.hot_list = res.data.result.hots
  },
  data() {
    return {
      value: '',
      hot_list: [],
      search_list: [],
      timer: null,
      loading: false,
      finished: false,
      page: 1
    }
  },
  methods: {
    do_search: async function (val) {
      return await doSearchAPI({keywords: val, limit: 20, offset: (this.page - 1) * 20})
    },
    hot_fn: async function (val) {
      this.finished = false
      this.page = 1
      this.value = val
      const res = await this.do_search(val)
      // console.log(res)
      this.search_list = res.data.result.songs
    },
    to_song: function (id) {
      this.$router.push({
        path: '/music',
        query: {
          id: id
        }
      })
    },
    input_fn: function (val) {

      if (this.timer) clearTimeout(this.timer)

      this.timer = setTimeout(async () => {
        this.finished = false
        this.page = 1
        this.value = val
        // console.log(val)
        if (val.trim().length !== 0) {
          const res = await this.do_search(val)
          // console.log(res)
          if (res.data.result.songs === undefined) {
            this.search_list = []
          } else {
            this.search_list = res.data.result.songs
          }
        } else {
          this.search_list = []
          this.value = ''
        }
        this.timer = ''
      }, 1000)
    },
    onLoad: async function () {
      this.page++
      const res = await this.do_search(this.value)
      if (res.data.result.songs === undefined) {
        this.finished = true
        this.loading = false
        return
      }
      this.search_list = [...this.search_list, ...res.data.result.songs]
      this.loading = false

    }
  }
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框
.van-cell {
  border-bottom: 1px solid lightgray;
}*/
</style>