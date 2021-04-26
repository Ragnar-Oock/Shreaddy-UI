<template>
	<div class="s-checkbox-group">
		<SCheckbox
			v-for="(option, index) in options"
			:id="name + '-' + index"
			:key="index"

			:name="name"
			:value="option.value"
			:block="type === 'block'"

			:disabled="option.isDisabled"

			:checked="isSelected(option)"
			@update:checked="onCheckChange(option, $event)"
		>
			{{ option.label }}
		</SCheckbox>
	</div>
</template>

<script lang="js">
import SCheckbox from './SCheckbox.vue';

export default {
	name: 'SCheckboxGroup',
	components: {
		SCheckbox
	},
	props: {
		name: {
			type: String,
			required: true
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
		selected: {
			type: Array,
			required: false,
			default: undefined
		},
		type: {
			type: String,
			required: false,
			default: 'list',
			validator(value) {
				return ['list', 'block'].includes(value);
			}
		},
		toggle: {
			type: Boolean,
			default: false,
			required: false
		}
	},
	emits: ['update:selected'],
	data () {
		return {
			// selectedOptions: []
		};
	},
	methods: {
		onCheckChange(option, event) {
			if (this.toggle) {
				this.onToggle(option, event);
			}
			else {
				this.onSelect(option, event);
			}
		},
		isSelected(option) {
			return this.selected.includes(option.name);
		},
		onSelect(option, event) {
			const selectedOptions = this.selected;

			if (event) {
				selectedOptions.push(option.name);
			}
			else {
				const index = selectedOptions.findIndex(element => element === option.name);

				selectedOptions.splice(index, 1);
			}

			this.$emit('update:selected', selectedOptions);
		},
		onToggle(option, event) {
			const selectedOption = event ? [option.name] : [];

			this.$emit('update:selected', selectedOption);
		}
	}
};


</script>

<style scoped lang="scss">
  .s-checkbox-group {
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
