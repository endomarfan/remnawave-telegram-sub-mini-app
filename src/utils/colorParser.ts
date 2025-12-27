const BRAND_ORANGE_RGB: [number, number, number] = [255, 146, 43]

const COLORS: Record<string, [number, number, number]> = {
    brandOrange: BRAND_ORANGE_RGB,
    orange: BRAND_ORANGE_RGB,
    teal: [32, 201, 151],
    green: [64, 192, 87],
    lime: [130, 201, 30],
    red: BRAND_ORANGE_RGB,
    amber: [250, 176, 5],
    yellow: [250, 176, 5],
    blue: [34, 139, 230],
    cyan: BRAND_ORANGE_RGB,
    sky: [34, 139, 230],
    indigo: [99, 102, 241],
    violet: [151, 117, 250],
    purple: [151, 117, 250],
    fuchsia: [151, 117, 250],
    pink: [244, 114, 182],
    rose: [244, 114, 182],
    gray: [55, 58, 64],
    dark: [55, 58, 64]
}

const DEFAULT_COLOR = BRAND_ORANGE_RGB

const hexToRgb = (hex: string): [number, number, number] | null => {
    const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return match ? [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)] : null
}

const getRgb = (color: string): [number, number, number] =>
    COLORS[color] ?? hexToRgb(color) ?? DEFAULT_COLOR

export interface ColorGradientStyle {
    background: string
    border: string
    boxShadow?: string
}

export const getColorGradient = (color: string): ColorGradientStyle => {
    const [r, g, b] = getRgb(color)
    return {
        background: `linear-gradient(135deg, rgba(${r},${g},${b},0.15) 0%, rgba(${r},${g},${b},0.08) 100%)`,
        border: `1px solid rgba(${r},${g},${b},0.3)`
    }
}

export const getColorGradientSolid = (color: string): ColorGradientStyle => {
    const [r, g, b] = getRgb(color)
    const dark1 = [22 + r * 0.08, 27 + g * 0.08, 35 + b * 0.08].map(Math.floor)
    const dark2 = [20 + r * 0.05, 24 + g * 0.05, 30 + b * 0.05].map(Math.floor)

    return {
        background: `linear-gradient(135deg, rgb(${dark1}) 0%, rgb(${dark2}) 100%)`,
        border: `1px solid rgba(${r},${g},${b},0.4)`,
        boxShadow: `inset 0 0 20px rgba(${r},${g},${b},0.15)`
    }
}
