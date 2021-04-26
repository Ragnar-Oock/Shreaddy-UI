<template>
	<div class="s-input">
		<label
			:for="id"
			class="label"
		><slot /></label>
		<input
			:id="id"
			v-model="_value"
			:type="type"
			class="input"
			v-bind="$attrs"
		>
	</div>
</template>

<script lang="js">

export default {
	name: 'SInput',
	inheritAttrs: false,
	props: {
		value: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: false,
			default: 'text'
		},
		id: {
			type: String,
			required: true
		}
	},
	emits: ['update:value'],
	data () {
		return {

		};
	},
	computed: {
		_value: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit('update:value', value);
			}
		}
	}
};


</script>

<style scoped lang="scss">
  .s-input {
		display: grid;
		grid-template-areas: 'label' 'input';
		gap: .5em;

		.label {
			grid-area: label;
			text-align: left;
			font-weight: 550;
			color: var(--text);
		}
		.input {
			grid-area: input;
			border: 3px solid #0000;
			background-color: var(--filler-5);
			border-radius: 5px;
			padding: .25em;
			color: var(--text);
			box-sizing: content-box;

			&:focus,
			&:hover {
				outline: none;
				appearance: auto;
				border-color: var(--accent);
			}

			&:invalid,
			&:invalid:focus {
				border-color: var(--red);
				outline: none;
				box-shadow: none;
			}
		}
  }
</style>
