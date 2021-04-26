<template>
	<div class="s-checkbox">
		<input
			:id="id"
			v-model="isChecked"
			type="checkbox"
			:name="name"
			class="input"
			:disabled="disabled"
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
	name: 'SCheckbox',
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
	emits: ['update:checked'],
	computed: {
		isChecked: {
			get() {
				return this.checked;
			},
			set(event) {
				this.$emit('update:checked', event);
			}
		}
	}
};


</script>

<style scoped lang="scss">
  .s-checkbox {
		width: max-content;
		.input {
			position: absolute;
			opacity: 0;
			z-index: -100;

			&:checked + .label {
				&::before {
					border-radius: 0;
					width: .8em;
					height: 0.3em;
					border: 3px solid var(--accent);
					border-top: none;
					border-right: none;
					transform: rotate(-45deg) translate(18%, -24%);
				}
				.text {
					background-color: var(--filler-5);
				}
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
			position: relative;
			padding-left: .5em;

			&::before {
				content: '';
				// background-color: var(--filler-5);
				display: block;
				width: calc(.8em - 3px);
				height: calc(.8em - 3px);
				border-radius: 6px;
				border: 3px solid var(--filler-5);
				box-sizing: initial;
			}
		}
		.text {
			font-weight: 550;
			color: var(--text);
			padding: calc(.25em - 3px) calc(.5em - 3px);
			border-radius: 5px;
			border: 3px solid #0000;
			transition: 300ms ease-in-out;
			transition-property: border-color, background-color, color;
			margin-left: .5em;
		}
		.label:hover .text,
		.input:focus-visible + .label .text {
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
					background-color: var(--filler-5);
					text-align: center;
				}
				&::before {
					content: none;
				}
			}
			.input:checked + .label .text {
				background-color: var(--accent);
				color: var(--text-on-accent);
			}
			.input:checked:focus-visible + .label .text {
				background-color: var(--filler-5);
				color: var(--text);
				border-color: var(--accent);
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

		&.fill {
			.text {
				background-color: var(--filler-5);
			}
		}
  }
</style>
