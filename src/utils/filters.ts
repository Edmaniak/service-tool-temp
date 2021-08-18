export default {
    units (value: string) {
        if (!value) return ''
        return value?.replace('enum', '').replace('On', '')
    },

    round (value: number, step: number | undefined) {
        if (!step || isNaN(value)) return value
        // @ts-ignore
        return Math.round((parseFloat(value) + Number.EPSILON) * (1 / step)) / (1 / step)
    },

    truncate (text: string, limit: number, elipse = '...') {
        if (text && text.length > limit) {
            return `${text.substring(0, limit)}${elipse}`
        }
        return text
    }
}