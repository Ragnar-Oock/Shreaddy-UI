<template>
	<div class="s-range">
		<label
			:for="`${id}-range`"
			class="label"
		><slot /></label>
		<input
			:id="`${id}-range`"
			:value="value"
			type="range"
			:name="`${name}-range`"
			class="range"
			:min="min"
			:max="max"
			:step="step"
			@input="onInput"
		>
		<label
			:for="`${id}-number`"
			class="sr-only"
		><slot /></label>
		<div
			class="number-wrapper"
			:style="{'--iconLeft': `'${iconLeft}'`, '--iconRight': `'${iconRight}'`}"
		>
			<input
				:id="`${id}-number`"
				type="number"
				:name="`${name}-number`"
				:value="value"
				class="number"
				:min="min"
				:max="max"
				:step="step"
				:class="{'has-left-icon': iconLeft !== '', 'has-right-icon': iconRight !== ''}"
				:style="{
					'--padding-left': calculateTextWidth(iconLeft, '16px Quicksand'),
					'--padding-right': calculateTextWidth(iconRight, '16px Quicksand'),
					'--text-width': maxWidth
				}"
				@input="onInput"
			>
		</div>
	</div>
</template>

<script lang="js">
import { getUuid, calculateTextWidth } from '../helpers/methods';

export default {
	name: 'SRange',
	props: {
		id:{
			type: String,
			default: getUuid(),
			required: false
		},
		name: {
			type: String,
			required: true
		},
		value: {
			type: Number,
			required: true
		},
		min: {
			type: Number,
			required: false,
			default: 0
		},
		max: {
			type: Number,
			required: false,
			default: 100
		},
		step: {
			type: Number,
			default: 1,
			required: false
		},
		iconLeft: {
			type: String,
			default: '',
			required: false
		},
		iconRight: {
			type: String,
			default: '',
			required: false
		}
	},
	emits: ['update:value'],
	computed: {
		maxWidth() {
			const paddedMaxValue = ''.padStart(this.max.toString().length, 0);

			return calculateTextWidth(paddedMaxValue, '16px Quicksand');
		}
	},
	methods: {
		onInput(event) {
			this.$emit('update:value', Number(event.target.value));
		},
		calculateTextWidth(text, font, unit) {
			return calculateTextWidth(text, font, unit);
		}
	}
};
</script>

<style scoped lang="scss">
  .s-range {
		display: grid;
		grid-template-areas: 'label label' 'range number';
		grid-template-columns: 1fr auto;
		gap: 0 .5em;

		.label {
			grid-area: label;
			text-align: left;
			font-weight: 550;
			color: var(--text);
		}
		.range {
			grid-area: range;
			-webkit-appearance: none;
			width: 100%;
			background-color: #0000;
			cursor: pointer;

			--thumb-color: var(--accent);
			--thumb-width: .6em;
			--thumb-height: 1.25em;

			--track-color: var(--filler-5);
			--track-thickness: .2em;

			&::-webkit-slider-thumb {
				-webkit-appearance: none;
				width: var(--thumb-width);
				height: var(--thumb-height);
				position: relative;
				top: 50%;
				transform: translateY(-50%);
				border: none;
				border-radius: 5px;
				background-color: var(--thumb-color);
				// border: 3px solid #0000;
				box-sizing: content-box;
				transition: background-color 300ms ease-in-out;
			}
			&::-moz-range-thumb {
				width: var(--thumb-width);
				height: var(--thumb-height);
				border: none;
				border-radius: 5px;
				background-color: var(--thumb-color);
				// border: 3px solid #0000;
				box-sizing: content-box;
				transition: background-color 300ms ease-in-out;
			}

			&::-webkit-slider-runnable-track {
				height: var(--track-thickness);
				border-radius: 5px;
				background-color: var(--track-color);
				box-sizing: content-box;
				border: 2px solid var(--track-color);
				transition: background-color 300ms ease-in-out;
			}
			&::-moz-range-track {
				height: var(--track-thickness);
				border-radius: 5px;
				background-color: var(--track-color);
				border: 2px solid var(--track-color);
				transition: background-color 300ms ease-in-out;
			}

			&:focus{
				outline: none;
				&::-webkit-slider-runnable-track{
					border-color: var(--thumb-color);
				}
				&::-moz-range-track {
					border-color: var(--thumb-color);
				}

				&::-webkit-slider-thumb {
					background-color: var(--track-color);
				}
				&::-moz-range-thumb{
					background-color: var(--track-color);
				}
			}

		}
		.number {
			appearance: textfield;
			width:  calc(var(--text-width) + var(--padding-left) + var(--padding-right));
			border: 3px solid #0000;
			background-color: var(--filler-5);
			border-radius: 5px;
			padding: .25em;
			color: var(--text);
			box-sizing: content-box;

			--buttons-padding: 1.5em;

			&-wrapper{
				grid-area: number;
				display: flex;
				flex-direction: row;
				position: relative;
				width: max-content;

				&::before {
					content: var(--iconLeft);
					position: absolute;
					top: 50%;
					left: 6px;
					color: var(--text);
					transform: translateY(-50%);
				}
				&::after {
					content: var(--iconRight);
					position: absolute;
					top: 50%;
					right: 6px;
					color: var(--text);
					transform: translateY(-50%);
				}
			}

			&.has-left-icon{
				padding-left: calc(var(--padding-left, 1em) + 6px);
			}
			&.has-right-icon{
				padding-right: calc(var(--padding-right, 1em) + 6px);
			}

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
