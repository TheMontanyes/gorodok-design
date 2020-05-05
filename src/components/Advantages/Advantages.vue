<template>
  <section class="advantages g-section">
		<h2 class="g-main-title">Почему мы?</h2>
    <div class="advantages__list">
      <card :key="n" v-for="n in 5"></card>
    </div>
  </section>
</template>

<script src="./Advantages.js"></script>

<style lang="less">
	@import "../../assets/css/settings.less";
	@import './Advantages.less';
</style>
