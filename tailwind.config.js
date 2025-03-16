 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: '1290px',
          lg: '1024px',
          md: "768px",
          sm: "640px"
        },
        padding: "5px"
      },
      spacing: {
        "2.5": "10px",
        "4.5": "18px",
        "7.5": "30px",
        "12.5": "50px",
        "15": "60px",
        "25": "100px"
      },
      backgroundImage: {
        'testimonial-banner': "url('/images/bg-img.png')",
        'newsletter-banner': "url('/images/bg-img.png')"
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },

        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },

        green: {
          DEFAULT: "var(--green)",
          foreground: "var(--green-foreground)",
        },

        warm: {
          DEFAULT: "var(--warm)",
        },

        cream: {
          DEFAULT: "",
          foreground: "var(--cream-foreground)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

      },
      fontFamily: {
        "bubblegum-sans": "Bubblegum Sans",
        "jost": "Jost",
        "nunito": "Nunito"
      },
      animation: {
        'left-right': 'left-right 2s linear infinite',
        'left-right-2': 'left-right-2 4s linear infinite;',
        'up-down': 'up-down 2s linear infinite',
        'skw': 'skw 2s linear infinite',
        'expend-width-height': 'expend-width-height 2s linear infinite',
      }
    },
  },
  plugins: [],
}