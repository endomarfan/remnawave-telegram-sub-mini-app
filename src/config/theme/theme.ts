import { createTheme } from '@mantine/core'

import components from './overrides'

export const theme = createTheme({
    components,

    cursorType: 'pointer',

    fontFamily: 'Montserrat, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontFamilyMonospace: 'Fira Mono, monospace',

    headings: {
        fontFamily: 'Unbounded, sans-serif',
        fontWeight: '600'
    },

    breakpoints: {
        xs: '22em',
        sm: '30em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em'
    },

    scale: 1,
    fontSmoothing: true,
    focusRing: 'auto',

    white: '#ffffff',
    black: '#1c1c1c',

    colors: {
        dark: [
            '#f3f3f3',
            '#e6e6e6',
            '#cfcfcf',
            '#b8b8b8',
            '#8f8f8f',
            '#3a3a3a',
            '#2f2f2f',
            '#242424',
            '#1b1b1b',
            '#121212'
        ],

        brandOrange: [
            '#fff4e6',
            '#ffe8cc',
            '#ffd8a8',
            '#ffc078',
            '#ffa94d',
            '#ff922b',
            '#fd7e14',
            '#f76707',
            '#e8590c',
            '#d9480f'
        ],

        orange: [
            '#fff1e5',
            '#ffd8b5',
            '#ffb77c',
            '#fb8f44',
            '#e16f24',
            '#bc4c00',
            '#953800',
            '#762c00',
            '#5c2200',
            '#471700'
        ]
    },

    primaryColor: 'brandOrange',

    primaryShade: {
        light: 6,
        dark: 7
    },

    autoContrast: true,
    luminanceThreshold: 0.35,

    defaultRadius: 'lg'
})
