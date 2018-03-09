import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/views/Search'
import Weui from '@/views/weui/Weui'
import Translation from '@/views/translation/Translation'
import Find from '@/views/find/Find'

import Me from '@/views/me/Me'
import User from '@/views/me/children/User'
import Purse from '@/views/me/children/Purse'
import Collection from '@/views/me/children/Collection'


Vue.use(Router)
export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
			redirect: '/weui'
    },
    {
      path: '/weui',
      name: 'weui',
      component: Weui
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/translation',
      name: 'translation',
      component: Translation
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
      children: [
        {
          path: "user",
          name: 'user',
          component: User,
        },
        {
          path: "purse",
          name: 'purse',
          component: Purse,
        },
        {
          path: "collection",
          name: "collection",
          component: Collection
        }
      ]
    }
  ]
})
