<template>
	<router-link :to="btnLink" :class="[className, btnImg ? 'g-btn-click' : '']">{{ text }}<img v-if="btnImg" :src="require('@/assets/images/' + btnImg)" alt=""></router-link>
</template>

<script src="./Button.js"></script>

<style lang="less">
@import "../../assets/css/settings.less";
@import "./Button.less";
</style>
