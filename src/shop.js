window.products = function() {
	return {
		menuOpened: false,
		menuItems: [
			{title: 'Collections', url: '#'},
			{title: 'Men', url: '#'},
			{title: 'Women', url: '#'},
			{title: 'About', url: '#'},
			{title: 'Contact', url: '#'},
		],
		product: {
			company: 'Sneaker Company',
			title: 'Fall Limited Edition Sneakers',
			description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
			price: '125.00',
			discount: '50',
			fullAmount: '250.00',
			images: [
				{id: 0, full: './images/image-product-1.jpg', thumb: './images/image-product-1-thumbnail.jpg', alt:'product image 1', active: true},
				{id: 1, full: './images/image-product-2.jpg', thumb: './images/image-product-2-thumbnail.jpg', alt:'product image 2', active: false},
				{id: 2, full: './images/image-product-3.jpg', thumb: './images/image-product-3-thumbnail.jpg', alt:'product image 3', active: false},
				{id: 3, full: './images/image-product-4.jpg', thumb: './images/image-product-4-thumbnail.jpg', alt:'product image 4', active: false},
			]
		},
		get selectedImage() {
			return this.product.images.find((image) => image.active)
		},
		selectImage(id) {
			this.product.images.forEach((image) => image.active = false)
			this.product.images.find((image) => image.id === id).active = true
		},
		lightboxActive: false,
		cartOpened: true,
		count: 0,
		order: [
			{
				title: '',
				price: null,
				imageThumb: '',
				countInCart: 0,
				totalPrice: null
			}
		],
		aadToCart() {
			this.order.push = {
				title: this.product.title,
				price: null,
				imageThumb: this.product.images[0].thumb,
				imageAlt: this.product.images[0].alt,
				countInCart: this.count,
				totalPrice: this.product.price * this.order.countInCart
			}
		}
	}
}