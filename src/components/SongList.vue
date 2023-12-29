<template>
  <van-cell-group inset>
    <van-cell center :title="obj.name" :label="`${obj.song.artists[0].name} - ${obj.song.name}`" v-for="obj in songList"
              :key="obj.id">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.7rem" @click="to_song(obj.id)"/>
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script>

export default {
  name: "SongList",
  props: {
    songList: Array
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

</style>