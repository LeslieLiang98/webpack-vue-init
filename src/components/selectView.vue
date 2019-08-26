<template>
	<select>
		<option v-for="item in dataList" :key="item" :value="item" v-text="item"></option>
	</select>
</template>

<script>
export default {
	data() {
		return {
			dataList: [1,2,3,4,5]
		}
	}
}
</script>