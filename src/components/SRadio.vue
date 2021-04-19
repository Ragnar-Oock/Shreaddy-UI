<template>
	<div
		class="s-radio"
		:class="{'block': block}"
	>
		<input
			:id="id"
			:type="type"
			:name="name"
			class="s-radio__input"
			:disabled="disabled"
		>
		<label
			:for="id"
			class="s-radio__label"
		>
			<span class="s-radio__text">
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
		uncheckable: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	computed:{
		type() {
			return this.uncheckable ? 'checkbox' : 'radio';
		}
	}
};


</script>

<style scoped lang="scss">
  .s-radio {
		width: auto;
		&__input {
			position: absolute;
			opacity: 0;
		}
		&__label {
			display: inline-flex;
			align-items: center;

			&::before {
				content: '';
				background-color: var(--filler-5);
				display: block;
				width: calc(.8em - 3px);
				height: calc(.8em - 3px);
				border-radius: 5px;
				border: 3px solid var(--filler-5);
			}
		}
		&__text {
			cursor: pointer;
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
		&__label:hover &__text,
		&__input:focus + &__label &__text {
			border-color: var(--accent);
		}

		&__input:checked + &__label::before {
			background-color: var(--accent);
		}
		&__input:disabled + &__label > &__text {
			background-color: #0000;
			color: var(--counter-text);
			cursor: default;
		}
		&__input:disabled + &__label::before {
			background-color: #0000;
			border-color: var(--filler-2);
		}
		&__input:disabled + &__label:hover > &__text {
			border-color: #0000;
		}

		&.block &__label &__text {
			border-radius: 0;
			margin: 0;
		}
		&.block &__label::before {
			content: none;
		}
		&.block &__input:checked + &__label &__text {
			background-color: var(--accent);
			color: var(--text-on-accent);
		}

		&.block:first-child &__text{
			border-radius: 5px 0 0 5px;
		}
		&.block:last-child &__text{
			border-radius: 0 5px 5px 0;
		}
  }
</style>
