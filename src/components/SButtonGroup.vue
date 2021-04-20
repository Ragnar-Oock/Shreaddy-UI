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
	mounted() {
		// find all compact button components
		const buttons = this.$refs.root.querySelectorAll('.s-button.compact');

		// instanciate a singleton for all the buttons
		this.$tippySingleton(buttons, { placement: 'bottom' });
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
