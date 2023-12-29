import request from "@/utils/request"

export const hot_search = params => request(
    {url: '/search/hot', params}
)

export const do_search=params=>request(
    {
        url:'/cloudsearch',
        params
    }
)