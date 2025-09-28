import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Monastery Colors
        "monastery-saffron": "hsl(var(--monastery-saffron))",
        "monastery-light": "hsl(var(--monastery-light))",
        "monastery-gold": "hsl(var(--monastery-gold))",
        "himalayan-amber": "hsl(var(--himalayan-amber))",
        "spiritual-orange": "hsl(var(--spiritual-orange))",
        "prayer-cream": "hsl(var(--prayer-cream))",
        "cadmium-orange": "hsl(var(--cadmium-orange))",
        "bright-yellow": "hsl(var(--bright-yellow))",
        "sunny-gold": "hsl(var(--sunny-gold))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "monastery-gradient": "var(--gradient-primary)",
        "hero-gradient": "var(--gradient-hero)",
        "spiritual-gradient": "var(--gradient-spiritual)",
      },
      boxShadow: {
        monastery: "var(--shadow-monastery)",
        elevation: "var(--shadow-elevation)",
        glow: "var(--shadow-glow)",
        wave: "var(--shadow-wave)",
        "3d": "var(--shadow-3d)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "monastery-fade": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "monastery-slide": {
          from: {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "monastery-scale": {
          from: {
            opacity: "0",
            transform: "scale(0.8)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "monastery-glow": {
          from: {
            boxShadow: "0 0 30px hsl(50 95% 60% / 0.3)",
          },
          to: {
            boxShadow: "0 0 50px hsl(25 95% 65% / 0.5)",
          },
        },
        "wave-effect": {
          "0%, 100%": {
            transform: "translateX(0) scale(1)",
          },
          "25%": {
            transform: "translateX(-5px) scale(1.02)",
          },
          "75%": {
            transform: "translateX(5px) scale(0.98)",
          },
        },
        "float-3d": {
          "0%, 100%": {
            transform: "translateY(0px) rotateX(0deg)",
          },
          "50%": {
            transform: "translateY(-20px) rotateX(10deg)",
          },
        },
        "title-wave": {
          "0%, 100%": {
            transform: "scaleX(1) translateY(0)",
            opacity: "0.8",
          },
          "50%": {
            transform: "scaleX(1.1) translateY(-2px)",
            opacity: "1",
          },
        },
        "gradient-wave": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "25%": {
            backgroundPosition: "100% 50%",
          },
          "50%": {
            backgroundPosition: "200% 50%",
          },
          "75%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "monastery-fade": "monastery-fade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "monastery-slide": "monastery-slide 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "monastery-scale": "monastery-scale 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "monastery-glow": "monastery-glow 2s ease-in-out infinite alternate",
        "wave": "wave-effect 3s ease-in-out infinite",
        "float-3d": "float-3d 4s ease-in-out infinite",
        "title-wave": "title-wave 4s ease-in-out infinite",
        "gradient-wave": "gradient-wave 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
