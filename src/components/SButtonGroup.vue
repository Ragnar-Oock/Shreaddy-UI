<template>
	<div
		ref="root"
		class="s-button-group"
		:class="[type]"
	>
		<slot />
	</div>
</template>

<script>

export default {
	name: 'SButtonGroup',
	props: {
		type: {
			type: String,
			default: 'normal',
			required: false,
			validator(value) {
				return ['normal', 'compact', 'menu'].includes(value);
			}
		},
		direction: {
			type: String,
			default: 'vertical',
			required: false,
			validator(value) {
				return ['vertical', 'horizontal'].includes(value);
			}
		}
	},
	data () {
		return {
			tippies: []
		};
	},
	methods: {
		registerTippy(tippy) {
			// add the new tippy to the array of tippy instances
			this.tippies.push(tippy);

			// if all childs have registered their tippy instance build a tippy singleton
			if (this.$slots.default().length === this.tippies.length) {
				this.$tippy.singletonFromTippies(this.tippies, { placement: 'bottom' });
			}
		}
	}
};
</script>

<style lang="scss">
  .s-button-group {
		display: flex;
		padding: .5em;
		background-color: var(--filler-6);
		border-radius: 5px;
		box-shadow: var(--shadow);
		width: max-content;
		max-width: 45ch;
		flex-direction: column;

		&.compact {
			flex-direction: row;
			padding: 0;
			overflow: hidden;
		}
  }
</style>
