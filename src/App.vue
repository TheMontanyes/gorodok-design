<template>
  <main id="gorodok-app">
    <router-view />
		<advantages></advantages>
  </main>
</template>

<script>

export default {
	name: 'app'
}
</script>

<style lang="less">
	@import './assets/css/main.less';
</style>
