<template>
	<v-col class="align-center px-6 py-12">
		<v-row class="justify-center">
			<v-icon :color="iconcolor" size="50px">{{ icon }}</v-icon>
		</v-row>
		<v-row class="display-1 justify-center">{{ title | translate }} </v-row>
		<v-row class="subtitle-2 justify-center">
			{{ description | translate }}
		</v-row>
	</v-col>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import { Prop } from 'vue-property-decorator'

	@Component({ name: 'hero-point' })
	export default class HeroPoint extends Vue {
		@Prop() readonly icon: string
		@Prop() readonly title: string
		@Prop() readonly description: string
		@Prop({ default: 'black' }) readonly iconcolor: string
	}
</script>

<style scoped>
	.col {
		min-width: 300px;
		flex-grow: 0;
		/* height: 50vh; */
	}
</style>
