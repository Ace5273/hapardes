import Vue from 'vue'
import VueI18n from 'vue-i18n'

const langArray = ['he', 'en']

Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: 'he', // set locale
})
;(async () => {
	langArray.forEach(async (lang) => {
		import(`@/i18n/${lang}`).then(({ default: langObj }) => {
			i18n.setLocaleMessage(lang, langObj)
		})
	})
})()

Vue.filter('translate', (key: string, ...params: any) =>
	i18n.t(`${key}`, params),
)
