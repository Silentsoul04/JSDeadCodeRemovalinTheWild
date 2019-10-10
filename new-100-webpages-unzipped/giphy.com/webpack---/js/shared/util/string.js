export const isVowel = letter => {
    switch (letter.toUpperCase()) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return true
        default:
            return false
    }
}

export const removeWords = (fullString = '', words = []) => {
    const word = endsWithWords(fullString, words)
    const trimString = fullString.trim()

    return word ? trimString.slice(0, trimString.length - word.length) : fullString
}

export const endsWithWords = (fullString = '', words = []) => {
    if (!words.length) return false
    const regExp = new RegExp(`(${words.join('|')})$`, `gi`)
    const matches = fullString.trim().match(regExp)
    return matches ? matches[matches.length - 1] : false
}

export default {
    isVowel,
    endsWithWords,
    removeWords,
}