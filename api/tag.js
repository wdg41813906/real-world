import { request } from '@/plugins/request'

//获取文章标签列表
export const getTags = params => {
    return request({
        methods: 'GET',
        url: '/api/tags'
    })
}