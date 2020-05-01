# Gorodok Design
```
Official website of art Studio Gorodok Design
```
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run dev
```
### Compiles and minifies for production
```
npm run prod
```
### Lints and fixes files
```
npm run lint
```

```
/* Примеры глобальных регистраций компонентов

// 1 // вызов внутри шаблона тегом на примере <g-header></g-header> с сохранением обертки
Vue.component('g-header', function (resolve) {
	require(['./components/Header/Header.vue'], resolve)
})

new Vue({
	el: '#g-header',
	store
})

///////// или так - вызов шаблона здесь

new Vue({
	el: '#gorodok-app',
	router,
	store,
	template: '<g-header></g-header>'
})

// 2 // Монтирование компонента с удалением обертки по id элемента с вызовом

new Vue({
	router,
	store,
	render: h => h(Header)
}).$mount('#g-header')

///////// или так - без вызова

Vue.component('g-header', Header)

new Vue({
	el: '#g-header',
	router,
	store,
	render: h => h(Header)
})

*/
```
