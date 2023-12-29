<template>
  <div>
    <p class="title">推荐歌曲</p>
    <van-row type="flex" justify="space-around" gutter="10">
      <van-col span="8" v-for="obj in recommendList" :key="obj.id" @click="to_song(obj.id)">
        <van-image
            width="100%"
            height="3rem"
            fit="cover"
            :src="obj.al.picUrl"
        />
        <p class="song_name">{{ obj.al.name }}</p>
      </van-col>

    </van-row>
    <p class="title">最新音乐</p>
    <SongList :songList="newSongList"></SongList>

  </div>
</template>

<script>
import {recommendMusicAPI, newSongListAPI} from "@/api";
import SongList from "@/components/SongList";

export default {
  name: "index",
  components: {SongList},
  async created() {
    const res = await recommendMusicAPI({limit: 6})
    console.log(res)
    this.recommendList = res.data.data.dailySongs.slice(0, 6)

    const res2 = await newSongListAPI({limit: 30})
    // console.log(res2)
    this.newSongList = res2.data.result
  },
  data() {
    return {
      recommendList: [],
      newSongList: []
    }
  },
  methods: {
    to_song: function (id) {
      this.$router.push({
        path: '/music',
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}

/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}


</style>