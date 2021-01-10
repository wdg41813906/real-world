import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ab8e1134 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _0718d01b = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _478d08a6 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _e61fd626 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _bb5acd42 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _c32bc4ae = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _73ba583a = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _ab8e1134,
    children: [{
      path: "",
      component: _0718d01b,
      name: "home"
    }, {
      path: "/login",
      component: _478d08a6,
      name: "login"
    }, {
      path: "/register",
      component: _478d08a6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _e61fd626,
      name: "profile"
    }, {
      path: "/settings",
      component: _bb5acd42,
      name: "settings"
    }, {
      path: "/editor",
      component: _c32bc4ae,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _73ba583a,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
