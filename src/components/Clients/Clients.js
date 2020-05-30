import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
	name: 'clients',
	components: {
		Swiper,
		SwiperSlide
	},
	data () {
		return {
			swiperOption: {
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				slidesPerView: 6,
				spaceBetween: 50,
				freeMode: true
			}
		}
	}
}
