import css from './instagram.css'
const kissPeeker = {
    src: 'https://media.giphy.com/media/3oKGzkjwfdWoijurHG/200w.gif',
    height: 47,
    css: css.kissPeeker,
}
const hangPeeker = {
    src: 'https://media.giphy.com/media/3oFzlUc0W2IKnD4cAE/200w.gif',
    height: 53,
    marginTop: 30,
    css: css.hangPeeker,
}
const SEND = {
    showInput: true,
    title: 'Instagram Share',
    subtitle:
        'Instagram doesn’t support sharing from the web yet, but we can email you an MP4 to post! Just let us know where to send it.',
    peeker: kissPeeker,
    cta: 'Send Via Email',
    close: 'Nevermind :(',
}
const STEP = {
    SEND,
    SENDING: {
        ...SEND,
        title: 'Sending...',
        peeker: { ...kissPeeker, css: css.kissPeekerGoodbye },
    },
    PLUG_APP: {
        title: 'Check Your Inbox',
        subtitle:
            'But hey, sharing your favorite GIFs to Instagram is way easier and faster with the GIPHY app. No email necessary.',
        peeker: hangPeeker,
        cta: 'Download from App Store',
        close: 'Maybe Later :(',
    },
    GOT_IT: {
        title: 'Check Your Inbox',
        subtitle: 'The GIF has been sent to your email– just use the attached video to upload to Instagram 🤙',
        peeker: hangPeeker,
        cta: 'Got It',
    },
}

export default STEP
