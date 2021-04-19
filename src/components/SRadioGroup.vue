<template>
	<div
		class="s-radio-group"
		:class="[direction]"
	>
		<SRadio
			v-for="(option, index) in options"
			:key="index"
		>
			text here
		</SRadio>
	</div>
</template>

<script lang="js">

import SRadio from './SRadio.vue';

export default {
	name: 'SRadioGroup',
	components: {
		SRadio
	},
	props: {
		direction: {
			type: String,
			required: false,
			default: 'vertical',
			validator(value) {
				return ['vertical', 'horizontal'].includes(value);
			}
		},
		options: {
			type: Array,
			required: true,
			validator(value) {
				const isArray = Array.isArray(value);

				return isArray;
			}
		}
	}
};

</script>

<style scoped lang="scss">
  .s-radio-group {
		display: flex;
		flex-direction: column;
		align-items: left;
		&.horizontal {
			flex-direction: row;
			// border-radius: 5px;
			// overflow: hidden;
			width: max-content;
		}
  }
</style>
