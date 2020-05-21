export default {
	name: 'btn',
	props: {
		text: {
			type: String,
			required: true
		},
		className: {
			type: Array,
			required: false
		},
		btnLink: {
			type: String,
			required: false,
			default: '#'
		}
	}
}
