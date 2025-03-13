import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	safelist: [
		'bg-black',
	],
	theme: {
  	extend: {
			fontFamily: {
				// 👇 Add CSS variables
				jakarta: ["var(--font-jakarta)"],
			},
			fontSize: {
				16: '16px',
				18: '18px',
			},
  		colors: {
				"main-black": "var(--main-black)",
				inactive: "var(--inactive)",
				yellow: "var(--yellow)",
				"yellow-dark": "#F0BD01",
				"yellow-border": "var(--yellow-border)",
				"purple-bright": "var(--purple-bright)",
				"purple-dark": "var(--purple-dark)",
				"purple-light": "var(--purple-light)",
				"purple-border": "var(--purple-border)",
				"grey-border": "var(--grey-border)",
				"grey-border-2": "var(--grey-border-2)",
				"grey-border-3": "#EBEAE9",
				"grey-light": "rgba(102,102,102,0.10)",
				orange: '#DC4E00',
				"orange-light": "var(--orange-light)",
				"black-72": "rgba(0, 0, 0, 0.72)",
				green: "var(--green)",
				light: "var(--light)",
				"light-2": "var(--light-2)",
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			backgroundImage: {
				'gradient-radial': 'linear-gradient(106deg, #FB0 -33.01%, #FFDF6D 87.4%)',
				'gradient-radial-pink': 'linear-gradient(106deg, #FB0 -33.01%, #9747FF 87.4%)',
			},
			borderWidth: {
				DEFAULT: '1px',
				'0': '0',
				'2': '2px',
				'3': '3px',
				'4': '4px',
				'6': '6px',
				'8': '8px',
			},
			boxShadow: {
				'main': '0px 0px 2px 0px rgba(0, 0, 0, 0.20)',
				'yellow-border': '0px 3px 0px 0px',
				pricing: "0px 2px 2px 0px rgba(220, 218, 217, 0.50)",
				outline: '0 0 0 2pt black',
				header: "0px 2px 8px 0px rgba(220, 218, 217, 0.50)"
			},
  	},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
			margin: {
				xl: "40px"
			},
			// default breakpoints but with 40px removed
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1600px',
			},
		}
  },
  plugins: [
		require("tailwindcss-animate"),
	],
} as Config;
export default config;
