import Vue from 'vue'
// import Vuetify from 'vuetify/lib'
// import VueI18n from 'vue-i18n'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@/plugins/i18n'
import { router } from './routes/routes'

new Vue({
	//@ts-ignore
	vuetify,
	router,
	// i18n,
	render: (h) => h(App),
}).$mount('#app')
