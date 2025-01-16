import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
				  css: {
					maxWidth: '100ch', // add required value here
				  }
				}
			  },
		}
	},

	plugins: [typography]
} satisfies Config;
