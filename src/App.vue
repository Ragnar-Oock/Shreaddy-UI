<template>
	<SRadio
		id="radio1"
		name="radio1"
		value="1"
	>
		I'm a radio button
	</SRadio>
	<SRadio
		id="radio2"
		name="radio1"
		value="2"
		:disabled="true"
	>
		I'm a radio button
	</SRadio>
	<SRadio
		id="radio3"
		name="radio1"
		value="3"
	>
		I'm a radio button
	</SRadio>

	<SRadioGroup
		direction="horizontal"
		type="block"
		name="radio-group"
		:options="getOptions"
	/>
</template>

<script>
import SRadio from './components/SRadio.vue';
import SRadioGroup from './components/SRadioGroup.vue';

export default {
	components:{
		SRadio,
		SRadioGroup
	},
	data() {
		return {
			buttonText: 'Some text here'
		};
	},
	computed: {
		getOptions() {
			return [
				{
					label: this.buttonText,
					value: '1',
					isDisabled: false
				},
				{
					label: 'lorem ipsum',
					value: '2',
					isDisabled: false
				}
			];
		}
	}
};
</script>

<style>
#app {
	font-family: 'Quicksand';
  text-align: center;
  margin-top: 60px;
}

body{
	background-color: var(--surface);
}

.grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
	gap: 1em;
}
</style>
