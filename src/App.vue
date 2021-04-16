<template>
	<SButton>
		<template #default>
			Some text here
		</template>
		<template #icon>
			<svg
				version="1.1"
				viewBox="0 0 16 9.5"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
			><path
				class="a"
				d="M 1.5,1.5 8,8 14.5,1.5"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
			/></svg>
		</template>
	</SButton>
</template>

<script>
import SButton from './components/SButton.vue';

export default {
	components:{
		SButton
	}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
