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
		products: [
			{
				company: 'Sneaker Company',
				title: 'Fall Limited Edition Sneakers',
				description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
				price: 125.00,
				discount: 50,
				fullAmount: 250.00,
				images: [
					{full: './images/image-product-1.jpg', thumb: './images/image-product-1-thumbnail.jpg', alt:'product image 1'},
					{full: './images/image-product-2.jpg', thumb: './images/image-product-2-thumbnail.jpg', alt:'product image 2'},
					{full: './images/image-product-3.jpg', thumb: './images/image-product-3-thumbnail.jpg', alt:'product image 3'},
					{full: './images/image-product-4.jpg', thumb: './images/image-product-4-thumbnail.jpg', alt:'product image 4'},
				]
			},
		],
		selectedProduct: {
			company: 'Sneaker Company',
			title: 'Fall Limited Edition Sneakers',
			description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
			price: 125.00,
			discount: 50,
			fullAmount: 250.00,
			images: [
				{full: './images/image-product-1.jpg', thumb: './images/image-product-1-thumbnail.jpg', alt:'product image 1'},
				{full: './images/image-product-2.jpg', thumb: './images/image-product-2-thumbnail.jpg', alt:'product image 2'},
				{full: './images/image-product-3.jpg', thumb: './images/image-product-3-thumbnail.jpg', alt:'product image 3'},
				{full: './images/image-product-4.jpg', thumb: './images/image-product-4-thumbnail.jpg', alt:'product image 4'},
			],
		},
		activeImage: {
			full: './images/image-product-1.jpg', thumb: './images/image-product-1-thumbnail.jpg', alt:'product image 1'
		},
		selectImage(image) {
			this.activeImage = image
		},
		get currentImageIndex() {
			return this.selectedProduct.images.findIndex((image) => image.full === this.activeImage.full)
		},
		next: null,
		previous: null,
		previousImage(selectedProduct){
			if (this.currentImageIndex === 0) {
				this.previous = selectedProduct.images.length - 1
				this.next = this.currentImageIndex + 1
			} else {
				this.previous = this.currentImageIndex - 1
				if (this.currentImageIndex === selectedProduct.images.length - 1) {
					this. next = 0
				} else {
					this.next = this.currentImageIndex + 1
				}
			}
			this.activeImage = this.selectedProduct.images[this.previous]
		},
		nextImage(product) {
			if (this.currentImageIndex === product.images.length - 1) {
				this.next = 0
				this.previous = this.currentImageIndex - 1
			} else {
				this.next = this.currentImageIndex + 1
				if (this.currentImageIndex === 0) {
					this.previous = product.images.length - 1
				} else {
					this.previous = this.currentImageIndex - 1
				}
			}
			this.activeImage = this.selectedProduct.images[this.next]
		},
		lightboxActive: false,
		cartOpened: false,
		count: 0,
		order: {
			products: []
		},
		addToCart(product) {
			if (this.count === 0) {
				this.count++
			}
			// imageThumb = product.images[0].thumb
			// imageAlt = product.images[0].alt
			// quantity = this.count
			// totalPrice = product.quantity * product.price
			this.count = 0
			console.log(product)
			this.order.products.push(product)
		},
		removeFromCart(product) {
			let position = this.order.lastIndexOf(product)
			this.order.products.splice(position, 1)
		}
	}
}