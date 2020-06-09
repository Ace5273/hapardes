<template>
	<div>
		<v-app-bar color="transparent">
			<v-tabs slider-color="black" color="black" :hide-slider="true">
				<v-tab to="Home">בית</v-tab>
				<v-tab to="About">אודות</v-tab>
				<v-tab to="Gallery">גלרייה</v-tab>
			</v-tabs>
		</v-app-bar>
		<v-content>
			<transition
				enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut"
				mode="out-in"
				:duration="{ enter: 400, leave: 400 }"
			>
				<router-view></router-view>
			</transition>
		</v-content>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({})
	export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped></style>
