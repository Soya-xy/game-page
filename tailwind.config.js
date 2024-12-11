import { resolve } from 'node:path'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import { cleanupSVG, importDirectorySync, isEmptyColor, parseColors, runSVGO } from '@iconify/tools'
import { compareColors, stringToColor } from '@iconify/utils/lib/colors'
import containerQueries from '@tailwindcss/container-queries'
import animate from 'tailwindcss-animate'
import resolveConfig from 'tailwindcss/resolveConfig'

/** @type {import('tailwindcss').Config} */
export default resolveConfig({
  darkMode: ['class', '[data-theme="dark"]'],
  safelist: ['dark'],
  prefix: '',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
      screens: {
        'xl': '1248px',
        '2xl': '1248px',
      },
    },
    extend: {
      boxShadow: {
        bc: 'var(--bc-shadow)',
        bc2: 'var(--bc-shadow2)',
      },
      backgroundColor: {
        popup: 'var(--bc-popupColor)',
        tab: 'var(--bc-tabColor)',
        color: 'var(--bc-bgColor)',
        color2: 'var(--bc-bgColor2)',
        color4: 'var(--bc-bgColor4)',
        color5: 'var(--bc-bgColor5)',
        color6: 'var(--bc-bgColor6)',
        active: 'var(--bc-activeColor)',
        noActive: 'var(--bc-noActiveColor)',
        noActive2: 'var(--bc-noActiveColor2)',
        header: 'var(--bc-headerColor)',
        page: 'var(--bc-pageColor)',
      },
      colors: {
        font: 'var(--bc-fontColor)',
        icon: 'var(--bc-iconColor)',
        color: 'var(--bc-textColor)',
        active: 'var(--bc-activeColor)',
        green: 'var(--bc-greenColor)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
  plugins: [
    animate,
    containerQueries,
    iconsPlugin({
      collections: {
        ...getIconCollections(['carbon', 'mdi']),
        svg: getCollections(resolve(__dirname, './assets/icons/svg')),
      },
    }),

  ],
})

function getCollections(dir) {
  // Import icons
  const iconSet = importDirectorySync(dir, {
    includeSubDirs: false,
  })

  // Validate, clean up, fix palette and optimism
  iconSet.forEachSync((name, type) => {
    if (type !== 'icon') {
      return
    }

    const svg = iconSet.toSVG(name)
    if (!svg) {
      // Invalid icon
      iconSet.remove(name)
      return
    }

    // Clean up and optimize icons
    try {
      // Clean up icon code
      cleanupSVG(svg)

      // Change color to `currentColor`
      // Skip this step if icon has hardcoded palette
      const blackColor = stringToColor('black')
      const whiteColor = stringToColor('white')
      parseColors(svg, {
        defaultColor: 'currentColor',
        callback: (attr, colorStr, color) => {
          if (!color) {
            // Color cannot be parsed!
            throw new Error(`Invalid color: "${colorStr}" in attribute ${attr}`)
          }

          if (isEmptyColor(color)) {
            // Color is empty: 'none' or 'transparent'. Return as is
            return color
          }

          // Change black to 'currentColor'
          if (compareColors(color, blackColor)) {
            return 'currentColor'
          }

          // Remove shapes with white color
          if (compareColors(color, whiteColor)) {
            return 'remove'
          }

          // NOTE: MGC icons has default color of #10161F
          if (compareColors(color, stringToColor('#10161F'))) {
            return 'currentColor'
          }

          // Icon is not monotone
          return color
        },
      })

      runSVGO(svg)
    }
    catch (err) {
      // Invalid icon
      console.error(`Error parsing ${name}:`, err)
      iconSet.remove(name)
      return
    }

    // Update icon
    iconSet.fromSVG(name, svg)
  })

  // Export
  return iconSet.export()
}
