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
				slidesPerView: 6,
				spaceBetween: 50,
				freeMode: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				}
			}
		}
	}
}
