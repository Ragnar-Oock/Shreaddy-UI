<template>
	<div
		class="s-radio"
		:class="{'block': block}"
	>
		<input
			:id="id"
			type="radio"
			:name="name"
			class="input"
			:disabled="disabled"
			:value="value"
			:checked="checked"
			@input="onChange"
		>
		<label
			:for="id"
			class="label"
		>
			<span class="text">
				<slot />
			</span>
		</label>
	</div>
</template>

<script lang="js">

export default {
	name: 'SRadio',
	props: {
		id: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		block: {
			type: Boolean,
			required: false,
			default: false
		},
		value: {
			type: String,
			required: true
		},
		checked: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	emits: ['change', 'update:checked'],
	methods:{
		onChange(e) {
			this.$emit('change', e.target.value);
			this.$emit('update:checked', e.target.value);
		}
	}
};


</script>

<style scoped lang="scss">
  .s-radio {
		width: max-content;
		.input {
			position: absolute;
			opacity: 0;
			z-index: -100;

			&:checked + .label::before {
				background-color: var(--accent);
			}
			&:disabled + .label {
				& {
					cursor: default;
				}
				& > .text {
					background-color: #0000;
					color: var(--counter-text);
				}
				&::before {
					background-color: #0000;
					border-color: var(--filler-2);
				}
				&:hover > .text {
					border-color: #0000;
				}
			}
		}
		.label {
			display: inline-flex;
			align-items: center;
			cursor: pointer;

			&::before {
				content: '';
				background-color: var(--filler-5);
				display: block;
				width: calc(.8em - 3px);
				height: calc(.8em - 3px);
				border-radius: 5px;
				border: 3px solid var(--filler-5);
				margin-left: .5em;
			}
		}
		.text {
			font-weight: 550;
			color: var(--text);
			background-color: var(--filler-5);
			padding: calc(.25em - 3px) calc(.5em - 3px);
			border-radius: 5px;
			border: 3px solid #0000;
			transition: 300ms ease-in-out;
			transition-property: border-color, background-color, color;
			margin-left: .5em;
		}
		.label:hover .text,
		.input:focus + .label .text {
			border-color: var(--accent);
		}

		&.block {
			flex-grow: 1;
			width: 100%;

			.label {
				width: 100%;
				.text {
					border-radius: 0;
					margin: 0;
					width: 100%;
				}
				&::before {
					content: none;
				}
			}
			.input:checked + .label .text {
				background-color: var(--accent);
				color: var(--text-on-accent);
			}

			&:first-child .text{
				border-radius: 5px 0 0 5px;
			}
			&:last-child .text{
				border-radius: 0 5px 5px 0;
			}

			.vertical & {
				&:first-child .text{
					border-radius: 5px 5px 0 0;
				}
				&:last-child .text{
					border-radius: 0 0 5px 5px;
				}
			}
		}
  }
</style>
