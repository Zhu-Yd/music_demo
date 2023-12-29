import {recommendMusic,newSongList} from "@/api/Home";
import {hot_search,do_search} from "@/api/search";
import {getSongById, getLyricById} from '@/api/Play'

export const recommendMusicAPI=recommendMusic
export const newSongListAPI=newSongList

export const hotSearchAPI=hot_search
export const doSearchAPI=do_search

export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据