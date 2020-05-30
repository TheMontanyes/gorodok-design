import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
	name: 'reviews',
	components: {
		Swiper,
		SwiperSlide
	},
	data () {
		return {
			swiperOption: {
				effect: 'coverflow',
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 3,
				coverflowEffect: {
					rotate: 60,
					stretch: 0,
					depth: 80,
					modifier: 1,
					slideShadows: false
				},
				pagination: {
					el: '.swiper-pagination'
				},
				navigation: {
					nextEl: '.button-next',
					prevEl: '.button-prev'
				}
			}
		}
	}
}
