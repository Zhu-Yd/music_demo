import request from "@/utils/request";

export const recommendMusic=params=>request({
    url:'/recommend/songs',
    params
})

export const newSongList=params=>request({
    url:'/personalized/newsong',
    params
})