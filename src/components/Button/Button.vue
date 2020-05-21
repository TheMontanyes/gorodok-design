<template>
	<router-link :to="btnLink" :class="className">{{ text }}</router-link>
</template>

<script src="./Button.js"></script>

<style lang="less">
@import "../../assets/css/settings.less";
@import "./Button.less";
</style>
