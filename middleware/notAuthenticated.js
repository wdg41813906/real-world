/**
 * 验证是否登录的中间件,已经登录肚饿页面不用在登录login页面和register页面
*/

export default function ({ store, redirect }) {
    //if the user is not authenticated
    if (store.state.user) {
        return redirect('/')
    }
}