<template>
	<v-col>
		<v-row class="Headline align-center">
			<v-col class="align-center">
				<div class="display-3 text-center">הפרדס</div>
				<div class="text-center">
					עמותה למען ילדים בדרום תל אביב
				</div>
			</v-col>
		</v-row>
		<v-row
			class="About justify-space-around"
			data-aos="fade-up"
			data-aos-easing="linear"
			data-aos-duration="800"
		>
			<hero-point
				icon="mdi-account"
				title="people"
				description="Home.peopleDescription"
			/>
			<hero-point
				icon="mdi-target"
				title="objectives"
				description="Home.objectivesDescription"
			/>
			<hero-point
				icon="mdi-account-group"
				title="community"
				description="Home.communityDescription"
			/>
		</v-row>
	</v-col>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import HeroPoint from '../components/HeroPoint.vue'

	@Component({ components: { HeroPoint } })
	export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
	.Headline {
		background-image: linear-gradient(
				to left,
				rgba(114, 88, 50, 0.8),
				rgba(46, 95, 57, 0.8)
			),
			url('https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');
		background-size: cover;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		color: white;
	}
	.customDescription {
		font-size: 4vh;
	}
	// .About {
	// 	// background: white;
	// 	// height: 70vh;
	// }
</style>
