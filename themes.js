var themeCool = {
	button: {
		tokens: {
			background: '#0071e5',
			backgroundHover: '#0581ff',
			backgroundActive: '#026cd8',
			borderColor: 'transparent',
			borderColorActive: 'transparent',
			borderRadius: '3px',
			textColor: '#fff'
		}
	}
}

var themeGamer = {
	button: {
		tokens: {
			background: '#eee',
			backgroundHover: '#eee',
			borderColorActive: '',
			borderRadius: '8px'
		},
		styles: {
			button: {
				border: '2px solid black',
				boxShadow: '3px 3px 0px 0px black',
				transition: 'all 50ms ease-in',
				'&:active': {
					transform: 'translate3d(2px, 2px, 10px)',
					boxShadow: '1px 1px 0px 0px black',
				}
			}
		}
	}
}