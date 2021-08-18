import {createApp} from 'vue'
import App from '@/App.vue';
import {setupRouter} from './router'
import store from './store'
import {loadLocaleMessages, setupI18n} from '@/utils/i18n';
// @ts-ignore
import buildInfo from './../build.json'
import {eventHub} from '@/utils/Utils';
import Events from '@/enums/Events';
import InitializationLoader from '@/components/InitializationLoader.vue';
import filters from '@/utils/filters';

let FIRST_INITIALIZATION = true

const i18n = setupI18n({
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    globalInjection: true,
    legacy: false,
    locale: 'cs',
    fallbackLocale: 'cs',
    fallbackWarn: false,
    missingWarn: false
})

const app = createApp(InitializationLoader).use(i18n)

loadLocaleMessages(i18n, 'cs').then(() => {
    app.use(i18n)
    app.mount('#app')
})

eventHub.$on(Events.SOCKET_CONNECTION_OPEN, async () => {
    if (FIRST_INITIALIZATION) {
        console.log(buildInfo)
        const router = await setupRouter(i18n)

        const app = createApp(App)
            .use(store)
            .use(router)
            .use(i18n)
            .use(VCalendar, {})

        app.directive('click-outside', {
            beforeMount (el, binding, vnode) {
                el.clickOutsideEvent = (event: any) => {
                    if (!(el === event.target || el.contains(event.target))) {
                        binding.value(event, el);
                    }
                };
                document.body.addEventListener('click', el.clickOutsideEvent);
            },
            unmounted (el) {
                document.body.removeEventListener('click', el.clickOutsideEvent);
            }
        });

        app.config.globalProperties.$filters = filters

        app.mount('#app')
        FIRST_INITIALIZATION = false
    }
})