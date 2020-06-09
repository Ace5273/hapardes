<template>
	<v-app>
		<router-view></router-view>
	</v-app>
</template>

<style lang="scss"></style>

<script lang="ts">
	import Vue from 'vue'
	import AOS from 'aos'
	import 'aos/dist/aos.css'

	export default Vue.extend({
		name: 'App',
		created() {
			AOS.init()
		},
	})
</script>
