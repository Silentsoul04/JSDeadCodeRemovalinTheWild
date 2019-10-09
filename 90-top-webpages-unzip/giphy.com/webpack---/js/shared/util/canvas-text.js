import wordwrap from 'word-wrapper'
import { size, forEach } from 'lodash'

export const LINE_HEIGHT = 1.2
export const MAX_FONT_SIZE = 40

export const scaledText = (canvas, text, options) => {
    const context = canvas.getContext('2d')
    const maxWidth = options.width || canvas.offsetWidth
    const maxHeight = options.height || canvas.offsetHeight
    const lineHeight = options.lineHeight || LINE_HEIGHT
    const lines = text.split('\n')
    const fontStyles = context.font.split(' ')
    let fontSize = options.fontSize || MAX_FONT_SIZE
    let width = 0
    fontStyles.shift()
    lines.forEach(line => {
        let testWidth = 0
        let testFontSize = fontSize
        do {
            context.font = `${options.fontWeight || 'normal'} ${testFontSize}px ${fontStyles.join(' ')}`
            testWidth = context.measureText(line).width
            testFontSize -= 1
            if (testFontSize < fontSize) {
                fontSize = testFontSize
            }
            if (testWidth > width) {
                width = testWidth
            }
        } while (testWidth > maxWidth)
    })
    const charHeight = fontSize * lineHeight
    const height = lines.length * charHeight
    return {
        fontSize,
        charHeight,
        charWidth: fontSize,
        offset: (maxHeight - height) / 2,
        width,
        height,
        lines,
    }
}

export const wrappedText = (canvas, text, options) => {
    const maxWidth = options.width || canvas.offsetWidth
    const maxHeight = options.height || canvas.offsetHeight
    const lineHeight = options.lineHeight || LINE_HEIGHT
    let fontSize = options.fontSize || MAX_FONT_SIZE
    let charWidth = options.charWidth || fontSize
    let charHeight = fontSize * lineHeight
    let maxChars = 0
    let lines = {}
    let height = 0
    let offset = 0

    const drawText = () => {
        charHeight = fontSize * LINE_HEIGHT
        maxChars = Math.ceil(maxWidth / charWidth)
        lines = wordwrap.lines(text, {
            width: maxChars,
            cut: true,
        })
        height = size(lines) * charHeight
        offset = (maxHeight - height) / 2
        fontSize--
    }

    if (options.doNotFit) {
        drawText()
    } else {
        do {
            drawText()
        } while (height >= maxHeight)
    }

    const formattedLines = []
    forEach(lines, ({ start, end }) => {
        formattedLines.push(text.substring(start, end))
    })

    return {
        fontSize,
        charWidth,
        charHeight,
        offset,
        height,
        lines: formattedLines,
    }
}

export default {
    wrappedText,
    scaledText,
}
