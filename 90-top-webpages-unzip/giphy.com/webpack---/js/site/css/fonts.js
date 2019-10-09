import { css } from 'styled-components'
const urlBase = `${window.STATIC_URL}webfonts`
const fonts = css`
    @font-face {
        font-family: 'interface';
        src: url('${urlBase}/InterFace_W_Rg.eot');
        src: url('${urlBase}/InterFace_W_Rg.eot#iefix') format('embedded-opentype'),
            url('${urlBase}/InterFace_W_Rg.woff2') format('woff2'),
            url('${urlBase}/InterFace_W_Rg.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'interface';
        src: url('${urlBase}/InterFace_W_Bd.eot');
        src: url('${urlBase}/InterFace_W_Bd.eot#iefix') format('embedded-opentype'),
            url('${urlBase}/InterFace_W_Bd.woff2') format('woff2'),
            url('${urlBase}/InterFace_W_Bd.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'interface';
        src: url('${urlBase}/InterFace_W_It.eot');
        src: url('${urlBase}/InterFace_W_It.eot#iefix') format('embedded-opentype'),
            url('${urlBase}/InterFace_W_It.woff2') format('woff2'),
            url('${urlBase}/InterFace_W_It.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }
    @font-face {
        font-family: 'interface';
        src: url('${urlBase}/InterFace_W_XBd.eot');
        src: url('${urlBase}/InterFace_W_XBd.eot#iefix') format('embedded-opentype'),
            url('${urlBase}/InterFace_W_XBd.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: 'nexablack';
        src: url('${urlBase}/nexa_black-webfont.eot');
        src: url('${urlBase}/nexa_black-webfont.eot#iefix') format('embedded-opentype'),
            url('${urlBase}/nexa_black-webfont.woff2') format('woff2'),
            url('${urlBase}/nexa_black-webfont.woff') format('woff'),
            url('${urlBase}/nexa_black-webfont.ttf') format('truetype'),
            url('${urlBase}/nexa_black-webfont.svg#nexablack') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'nexaregular';
        src: url('${urlBase}/nexa_regular-webfont.woff2') format('woff2'),
            url('${urlBase}/nexa_regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'nexabook';
        src: url('${urlBase}/nexa_book-webfont.woff2') format('woff2'),
            url('${urlBase}/nexa_book-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'emulogic';
        src: url('${urlBase}/emulogic.eot');
        src: url('${urlBase}/emulogic?#iefix') format('embedded-opentype'),
            url('${urlBase}/emulogic.woff2') format('woff2'), url('${urlBase}/emulogic.woff') format('woff'),
            url('${urlBase}/emulogic.ttf') format('truetype'),
            url('${urlBase}/emulogic.svg#emulogic') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'meme';
        src: url('${urlBase}/meme.woff2') format('woff2'), url('${urlBase}/meme.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'SSSocial';
        src: url('${urlBase}/ss-social-regular.eot');
        src: url('${urlBase}/ss-social-regular.eot?#iefix') format('embedded-opentype'),
            url('${urlBase}/ss-social-regular.woff') format('woff'),
            url('${urlBase}/ss-social-regular.ttf') format('truetype'),
            url('${urlBase}/ss-social-regular.svg#SSSocialRegular') format('svg');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'SSStandard';
        src: url('${urlBase}/ss-standard.eot');
        src: url('${urlBase}/ss-standard.eot?#iefix') format('embedded-opentype'),
            url('${urlBase}/ss-standard.woff2') format('woff2'),
            url('${urlBase}/ss-standard.woff') format('woff'),
            url('${urlBase}/ss-standard.ttf') format('truetype'),
            url('${urlBase}/ss-standard.svg#SSStandard') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'giphy';
        src: url('${urlBase}/giphy.ttf?-8lsmq3666') format('truetype'),
            url('${urlBase}/giphy.woff?-8lsmq3666') format('woff'),
            url('${urlBase}/giphy.svg?-8lsmq3666#giphy') format('svg');
        font-weight: normal;
        font-style: normal;
    }
`

export default fonts
