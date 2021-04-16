<template>
	<button class="btn">
		<span class="icon"><slot name="icon" /></span>
		<span class="btn__text"><slot /></span>
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
		}
	},
	data () {
		return {

		};
	}
};
</script>

<style scoped lang="scss">
  .btn {
		color: red
  }
</style>
