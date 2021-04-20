<template>
	<div
		class="s-radio-group"
		:class="[direction]"
	>
		<SRadio
			v-for="(option, index) in options"
			:id="name + '-' + index"
			:key="index"
			v-model:checked="option.checked"
			:disabled="option.isDisabled"
			:name="name"
			:value="option.value"
			:block="type === 'block'"
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
				if (!Array.isArray(value)) {
					return false;
				}

				value.forEach(option => {
					const hasLabel = Object.prototype.hasOwnProperty.call(option, 'label');
					const hasValue = Object.prototype.hasOwnProperty.call(option, 'value');

					if (!hasLabel || !hasValue) {
						return false;
					}
				});

				return true;
			}
		},
		type: {
			type: String,
			required: false,
			default: 'list',
			validator(value) {
				return ['list', 'block'].includes(value);
			}
		},
		name: {
			type: String,
			required: true
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
