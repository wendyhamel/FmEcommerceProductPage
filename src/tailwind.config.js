tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Kumbh Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				'orange': 'hsl(26, 100%, 55%)',
				'orange-pale': 'hsl(25, 100%, 94%)',
				'blue-gray-deep': 'hsl(220, 13%, 13%)',
				'blue-gray-dark': 'hsl(219, 9%, 45%)',
				'blue-gray': 'hsl(220, 14%, 75%)',
				'blue-gray-light': 'hsl(223, 64%, 98%)',
				'white': 'hsl(0, 0%, 100%)',
				'black': 'hsl(0, 0%, 0%)', // (with 75% opacity for lightbox background)
			},
			fontSize: {
				'2.5xl': ['1.6125rem', '2rem'],
				'4.5xl': ['2.5rem', '3rem'],
			}
		}
	}
}