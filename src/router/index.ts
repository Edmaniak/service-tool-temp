import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import {loadLocaleMessages, setI18nLanguage} from '@/utils/i18n';
import PageKeys from '@/enums/PageKeys';
import Overview from '@/pages/Overview.vue'
import Forms from '@/pages/Forms.vue'
import Orders from '@/pages/Orders.vue'
import Logs from '@/pages/Logs.vue'
import Communication from '@/pages/Communication.vue'
import MainLayout from '@/MainLayout.vue'
import UnitDetail from '@/pages/UnitDetail.vue'
import store from '@/store'


function beforeDetailEnter (to: any, from: any, next: any) {
    console.log(store)
    const unit = store.state.units[to.params.boardNumber]
    console.log(unit)
    return next()
}

const routes: Array<RouteRecordRaw> = [
    {path: '/', redirect: {name: PageKeys.DASHBOARD}},
    {
        path: '/dashboard', name: PageKeys.DASHBOARD, component: MainLayout, children: [
            {path: '', component: Overview},
            {name: PageKeys.OVERVIEW, path: PageKeys.OVERVIEW, component: Overview},
            {name: PageKeys.FORMS, path: PageKeys.FORMS, component: Forms},
            {name: PageKeys.ORDERS, path: PageKeys.ORDERS, component: Orders},
            {name: PageKeys.LOGS, path: PageKeys.LOGS, component: Logs},
            {name: PageKeys.COMMUNICATION, path: PageKeys.COMMUNICATION, component: Communication},
            {path: '/unit/:boardNumber', name: PageKeys.UNIT_DETAIL, component: UnitDetail, beforeEnter: async (to, from, next) => await beforeDetailEnter(to, from, next)},
        ]
    },
    {
        path: '/settings', name: PageKeys.SETTINGS, component: Overview, children: [
            {path: '', component: Overview}
        ]
    }

]


export async function setupRouter (i18n: any) {

    const router = createRouter({
        linkActiveClass: 'nav-item__link--active',
        history: createWebHashHistory(),
        routes
    })

    router.beforeEach(async (to, from, next) => {
        await loadLocaleMessages(i18n, 'cs')
        setI18nLanguage(i18n, 'cs')

        return next()
    })

    return router
}
