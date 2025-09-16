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
        // Custom 3D Monastery Colors
        "monastery-saffron": "hsl(var(--monastery-saffron))",
        "monastery-light": "hsl(var(--monastery-light))",
        "monastery-gold": "hsl(var(--monastery-gold))",
        "monastery-green": "hsl(var(--monastery-green))",
        "monastery-green-light": "hsl(var(--monastery-green-light))",
        "monastery-green-dark": "hsl(var(--monastery-green-dark))",
        "himalayan-blue": "hsl(var(--himalayan-blue))",
        "spiritual-purple": "hsl(var(--spiritual-purple))",
        "prayer-orange": "hsl(var(--prayer-orange))",
        "himalayan-amber": "hsl(var(--himalayan-amber))",
        "spiritual-orange": "hsl(var(--spiritual-orange))",
        "prayer-cream": "hsl(var(--prayer-cream))",
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
        "gradient-3d": "var(--gradient-3d)",
        "gradient-map": "var(--gradient-map)",
      },
      boxShadow: {
        monastery: "var(--shadow-monastery)",
        elevation: "var(--shadow-elevation)",
        glow: "var(--shadow-glow)",
        "3d": "var(--shadow-3d)",
        inset: "var(--shadow-inset)",
        floating: "var(--shadow-floating)",
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
            boxShadow: "0 0 20px hsl(40 90% 65% / 0.2), 0 0 40px hsl(40 90% 65% / 0.1)",
          },
          to: {
            boxShadow: "0 0 30px hsl(40 90% 65% / 0.4), 0 0 60px hsl(40 90% 65% / 0.2)",
          },
        },
        "wave-3d": {
          "0%, 100%": {
            transform: "translateY(0) rotateZ(0deg)",
          },
          "25%": {
            transform: "translateY(-10px) rotateZ(1deg)",
          },
          "50%": {
            transform: "translateY(-5px) rotateZ(0deg)",
          },
          "75%": {
            transform: "translateY(-15px) rotateZ(-1deg)",
          },
        },
        "monk-float": {
          from: {
            transform: "translateY(0) rotateY(0deg)",
          },
          to: {
            transform: "translateY(-10px) rotateY(5deg)",
          },
        },
        "monk-interact": {
          "0%": {
            transform: "scale(1) rotateY(0deg)",
          },
          "25%": {
            transform: "scale(1.1) rotateY(10deg)",
          },
          "50%": {
            transform: "scale(1.05) rotateY(-5deg)",
          },
          "75%": {
            transform: "scale(1.1) rotateY(15deg)",
          },
          "100%": {
            transform: "scale(1) rotateY(0deg)",
          },
        },
        "map-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 hsl(40 90% 65% / 0.7)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 0 10px hsl(40 90% 65% / 0)",
          },
        },
        "map-shimmer": {
          "0%": {
            transform: "translateX(-100%) translateY(-100%) rotate(45deg)",
          },
          "100%": {
            transform: "translateX(100%) translateY(100%) rotate(45deg)",
          },
        },
        "depth-hover": {
          "0%": {
            transform: "translateZ(0) rotateX(0)",
          },
          "50%": {
            transform: "translateZ(20px) rotateX(10deg)",
          },
          "100%": {
            transform: "translateZ(0) rotateX(0)",
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
        "3d-wave": "wave-3d 2s ease-in-out infinite",
        "monk-float": "monk-float 3s ease-in-out infinite alternate",
        "monk-interact": "monk-interact 1s ease-in-out",
        "map-pulse": "map-pulse 4s ease-in-out infinite",
        "map-shimmer": "map-shimmer 4s ease-in-out infinite",
        "depth-hover": "depth-hover 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
