import { request } from '@/plugins/request'


//获取公共文章列表
export const getArticles = params => {
    return request({
        methods: 'GET',
        url: '/api/articles',
        params
    })
}

//获取关注的用户文章列表

export const getFeedArticles = params => {
    return request({
        methods: 'GET',
        url: '/api/articles/feed',
        params,
        // headers: {
        //     //注意数据格式：Token空格 Token
        //     // Authorization: `Token `
        // }
    })
}

//添加点赞
export const addFavorite = slug => {
    return request({
        methods: 'POST',
        url: `/api/articles/${slug}/favorite`,
        // headers: {
        //     //注意数据格式：Token空格 Token
        //     // Authorization: `Token `
        // }
    })
}
//取消点赞
export const delFavorite = slug => {
    return request({
        methods: 'DELETE',
        url: `/api/articles/${slug}/favorite`,
        // headers: {
        //     //注意数据格式：Token空格 Token
        //     // Authorization: `Token `
        // }
    })
}

//获取文章详情
export const getArticle = slug => {
    return request({
        methods: 'GET',
        url: `/api/articles/${slug}`,
        // headers: {
        //     //注意数据格式：Token空格 Token
        //     // Authorization: `Token `
        // }
    })
}


//获取文章评论
export const getComments = slug => {
    return request({
        methods: 'GET',
        url: `/api/articles/${slug}/comments`,
        // headers: {
        //     //注意数据格式：Token空格 Token
        //     // Authorization: `Token `
        // }
    })
}

