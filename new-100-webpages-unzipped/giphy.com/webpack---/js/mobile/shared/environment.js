export const isiOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

export const isAndroid = () => navigator.userAgent.match(/Android/)

export const isiOSChrome = () => isiOS() && navigator.userAgent.match(/CriOS/)

export const isChromeAndroid = () => isAndroid() && navigator.userAgent.match(/Chrome/)