import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import Localization from '@/enums/Localization';

export const SUPPORT_LOCALES = [Localization.EN, Localization.CS, Localization.DE]

export function setI18nLanguage (i18n: any, locale: string) {
	if (i18n.mode === 'legacy') {
		i18n.global.locale = locale
	} else {
		i18n.global.locale.value = locale
	}
	/**
	 * NOTE:
	 * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
	 * The following is an example for axios.
	 *
	 * axios.defaults.headers.common['Accept-Language'] = locale
	 */
	document.querySelector('html')?.setAttribute('lang', locale)
}

export function setupI18n (options = { locale: 'cs' }) {
	const i18n = createI18n(options)
	setI18nLanguage(i18n, options.locale)
	return i18n
}



export async function loadLocaleMessages (i18n: any, locale: string) {
	// load locale messages with dynami import
	const messages = await import(
		/* webpackChunkName: "locale-[request]" */ `@/locales/${locale}.json`
		)

	// set locale and locale message
	i18n.global.setLocaleMessage(locale, messages.default)

	return nextTick()
}
