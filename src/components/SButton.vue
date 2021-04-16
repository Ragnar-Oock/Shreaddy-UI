<template>
	<button
		ref="root"
		class="btn"
		:class="{ 'outline': outline, 'active': isActive, 'dull': dull, 'small': small, 'block': block }"
		:disabled="disabled"
		@click.capture="onClick"
		@animationend="onAnimationEnd"
	>
		<span
			v-if="iconSide == 'left' && hasIcon"
			class="btn__icon"
		><slot name="icon" /></span>
		<span class="btn__text"><slot /></span>
		<span
			v-if="iconSide == 'right' && hasIcon"
			class="btn__icon"
		><slot name="icon" /></span>
	</button>
</template>

<script>
export default {
	name: 'SButton',
	props: {
		iconSide: {
			type: String,
			default: 'left',
			required: false,
			validator(value) {
				return ['left', 'right'].includes(value);
			}
		},
		outline: {
			type: Boolean,
			default: false,
			required: false
		},
		disabled: {
			type: Boolean,
			default: false,
			required: false
		},
		dull: {
			type: Boolean,
			default: false,
			required: false
		},
		small: {
			type: Boolean,
			default: false,
			required: false
		},
		block: {
			type: Boolean,
			default: false,
			required: false
		}
	},
	data () {
		return {
			isActive: false
		};
	},
	computed: {
		hasIcon() {
			return this.$slots.icon;
		}
	},
	methods: {
		onClick(e) {
			this.isActive = false;
			e.target.style.setProperty('--mouse-x', `${ e.layerX }px`);
			e.target.style.setProperty('--mouse-y', `${ e.layerY }px`);
			this.$nextTick(() => this.isActive = true);
		},
		onAnimationEnd(e) {
			if (e.target === this.$refs.root) {
				this.isActive = false;
			}
		}
	}
};
</script>

<style lang="scss">
  .btn {
		background-color: var(--filler-6);
		color: var(--text);
		border: 3px solid #0000;
		border-radius: 5px;
		padding: .5em 1.5em;
		font-size: 1rem;
		font-family: 'Quicksand';
		cursor: pointer;
		font-weight: 500;
		max-width: max-content;

		overflow: hidden;

		--mouse-x: 50%;
		--mouse-y: 50%;
		--riple-color: var(--primary-1);
		--border-color: var(--accent);

		position: relative;

		transition: 300ms border-color ease-in-out;

		&:focus,
		&:hover {
			border-color: var(--border-color);
			outline: none;
		}

		&.outline {
			background-color: #0000;
			border-color: var(--filler-6);
			color: var(--counter-text);

			&:focus,
			&:hover {
				border-color: var(--primary-1);
				outline: none;
			}
		}

		span {
			pointer-events: none;
		}

		&::before {
			content: '';
			position: absolute;
			display: block;

			left: var(--mouse-x);
			top: var(--mouse-y);
			width: 200%;
			height: 0;
			padding-top: 200%;

			transform: translate(-50%, -50%) scale(0);
			box-shadow: inset 0 0 5em 0 var(--riple-color), 0 0 1.5em 0 var(--riple-color);
			border-radius: 50%;
		}
		&.active::before {
			animation: click 500ms ease-in 1;
		}

		&[disabled] {
			background-color: var(--filler-2);
			color: var(--counter-text);
			cursor: default;

			&:focus,
			&:hover {
				border-color: #0000;
			}
		}
		&.dull {
			background-color: var(--filler-3);
			--riple-color: var(--filler-6);
			--border-color: var(--filler-6)
		}
		&.small {
			padding: .25em .75em;
		}
		&.block {
			width: 100%;
			max-width: unset;
		}

		@keyframes click {
			0% {
				transform: translate(-50%, -50%) scale(0);
				opacity: 1;
			}
			80% {
				opacity: 1;
			}
			100% {
				transform: translate(-50%, -50%) scale(1);
				opacity: 0;
			}
		}

		span:first-of-type#{&}__icon {
			margin-right: .75em;
		}

		span:last-of-type#{&}__icon {
			margin-left: .75em;
		}
  }
</style>
