import type {Config} from 'tailwindcss'

import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const primary = '#0b87e4'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	darkMode: 'class',
	// darkMode: 'selector',
	theme: {
		colors: {
			primary,
			transparent: colors.transparent,
			gray: {
				100: '#f6f5f6',
				200: '#dcdcdc',
				300: '#D9DAE8',
				400: '#999AA5',
				500: '#66676E',
				600: '#5e5e5e',
				700: '#4a4b4e',
				800: '#393a3e',
				900: '#242529'
			},
			white: '#fafafa',
			black: '#171616',
			red: '#db4c4c',
			pink: '#eb3472',
			yellow: '#fbc017',
			aqua: '#2a9095',
			green: '#4b8333',
			orange: '#fd7336',
			blue: '#0b87e4',
			purple: '#a969a0'
		},
		extend: {
			keyframes: {
				hide: {
					from: {
						height: 'auto'
					}
					,
					to: {
						height: '0'
					}
				}
				,
				visible: {
					from: {
						height: '0'
					}
					,
					to: {
						height: 'auto'
					}
				}
			}
			,
			animation: {
				animation_hide: 'hide 1s linear',
				animation_visible:
					'visible 1s linear'
			}
			// 		backgroundImage: {
			// 			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			// 			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			// 		},
			// 		spacing: {
			// 			0.5: '012rem',
			// 			layout: '2.75rem'
			// 		},
			// 		fontSize: {
			// 			'2lg': '1.38rem'
			// 		},
			// 		borderRadius: {
			// 			image: '0.5rem',
			// 			layout: '0.8rem'
			// 		},
			// 		transitionTimingFunction: {
			// 			DEFAULT: 'ease-in-out'
			// 		},
			// 		transitionDuration: {
			// 			DEFAULT: '200ms'
			// 		},
			// 		zIndex: {
			// 			1: '1',
			// 			2: '2',
			// 			3: '3'
			// 		},
			// 		keyframes: {
			// 			fade: {
			// 				from: {opacity: '0'},
			// 				to: {opacity: '1'}
			// 			},
			// 			scaleIn: {
			// 				'0%': {
			// 					opacity: '0',
			// 					transform: 'scale(0.9)'
			// 				},
			// 				'50%': {
			// 					opacity: '0.3'
			// 				},
			// 				'100%': {
			// 					opacity: '1',
			// 					transform: 'scale(1)'
			// 				}
			// 			}
			// 		},
			// 		animation: {
			// 			fade: 'fade .5s ease-in-out',
			// 			scaleIn: 'scaleIn .35s ease-in-out'
			// 		}
		}
	},
	corePlugins: {
		aspectRatio: false
	}
	,
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		plugin(({addComponents, theme, addUtilities}) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: primary,
					color: '#FFF',
					borderRadius: '0.65rem',
					transition: 'background-color .3 ease-in-out',
					'&:hover': {
						backgroundColor: '#FF0009'
					}
				},
				'.text-link': {
					textUnderlineOffset: '4',
					color: 'rgba(255, 255, 255, .9)',
					transition: 'text-decoration-color .3s ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 255, 255, 0.2)',
					'&:hover': {
						textDecorationColor: 'rgba(255, 255, 255, 0.9)'
					}
				},

				'.air-block': {
					borderRadius: theme('borderRadius.layout'),
					backgroundColor: theme('colors.gray.950'),
					color: theme('colors.white'),
					boxShadow: theme('boxShadow.lg')
				}
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)'
					},

					'.outline-border-none': {
						outline: 'none',
						border: 'none'
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between'
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none'
					}
				})
		})
	]
}
export default config
