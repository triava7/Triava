/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
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
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  			},
  			// Futuristic brand colors
  			brand: {
  				primary: '#14b8a6', // Teal/Cyan
  				secondary: '#8b5cf6', // Purple
  				accent: '#f97316', // Orange
  				coral: '#fb7185', // Coral/Rose
  				dark: '#0a0a0f', // Deep dark
  				light: '#f8fafc',
  				neon: {
  					cyan: '#06b6d4',
  					purple: '#a855f7',
  					orange: '#fb923c',
  					teal: '#14b8a6',
  				}
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-20px)' }
  			},
  			pulse: {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0.5' }
  			},
  			'glow-pulse': {
  				'0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
  				'50%': { opacity: '1', transform: 'scale(1.05)' }
  			},
  			'grid-flow': {
  				'0%': { transform: 'translateY(0)' },
  				'100%': { transform: 'translateY(-50%)' }
  			},
  			'scan-line': {
  				'0%': { transform: 'translateY(-100%)' },
  				'100%': { transform: 'translateY(100vh)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			float: 'float 6s ease-in-out infinite',
  			pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
  			'grid-flow': 'grid-flow 20s linear infinite',
  			'scan-line': 'scan-line 8s linear infinite'
  		},
  		fontSize: {
  			'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
  			'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
  			'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
  			'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
  			'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.875rem)',
  			'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)',
  			'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 3rem)',
  			'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3.75rem)',
  			'fluid-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 5rem)'
  		},
  		backgroundImage: {
  			'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};