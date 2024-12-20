import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				metropoliaMainOrange: '#ff5000',
				metropoliaSecondaryOrange: '#e54b00',
				metropoliaMainGrey: '#53565a',
				metropoliaSupportWhite: '#ffffff',
				metropoliaSupportBlack: '#000000',
				metropoliaSupportRed: '#cb2228',
				metropoliaSupportSecondaryRed: '#e60000',
				metropoliaSupportBlue: '#4046a8',
				metropoliaSupportYellow: '#fff000',
				metropoliaTrendPink: '#e384c4',
				metropoliaTrendLightBlue: '#5db1e4',
				metropoliaTrendGreen: '#3ba88f'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
