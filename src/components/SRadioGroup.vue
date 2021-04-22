<template>
	<div
		class="s-radio-group"
		:class="[direction, {'columns': columns !== ''}]"
		:style="{'grid-template-columns': columns}"
	>
		<SRadio
			v-for="(option, index) in options"
			:id="name + '-' + index"
			:key="index"

			:name="name"
			:value="option.value"

			:block="type === 'block'"
			:fill="fill"

			:disabled="option.isDisabled"

			:checked="selected"
			@update:checked="onChange"
		>
			{{ option.label }}
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
		},
		columns: {
			type: String,
			default: '',
			required: false
		},
		fill: {
			type: Boolean,
			required: false,
			default: false
		},
		selected: {
			type: String,
			required: false,
			default: undefined
		}
	},
	emits: ['update:selected'],
	methods: {
		onChange(event) {
			this.$emit('update:selected', event);
		}
	}
};

</script>

<style scoped lang="scss">
  .s-radio-group {
		display: flex;
		flex-direction: column;
		&.horizontal {
			flex-direction: row;
			width: max-content;
		}
		&.columns {
			display: grid;
		}
  }
</style>
