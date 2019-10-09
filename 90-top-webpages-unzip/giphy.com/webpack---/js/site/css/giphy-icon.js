import { css } from 'styled-components'

const giphyIcons = css`
    [class^='giphyicon-'],
    [class*=' giphyicon-'],
    [class^='giphyicon-']:before,
    [class*=' giphyicon-']:before {
        font-family: 'giphy';
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .giphyicon-tv:before {
        content: '\\e900';
    }
    .giphyicon-cinema:before {
        content: '\\e901';
    }
    .giphyicon-embed:before {
        content: '\\e902';
    }
    .giphyicon-fullscreen:before {
        content: '\\e903';
    }
    .giphyicon-browse:before {
        content: '\\e600';
    }
    .giphyicon-gifsu:before {
        content: '\\e601';
    }
    .giphyicon-slideshow:before {
        content: '\\e602';
    }
    .giphyicon-upload:before {
        content: '\\e603';
    }
    .giphyicon-gif-maker:before {
        content: '\\e604';
    }
    .giphyicon-browse-small:before {
        content: '\\e605';
    }
    .giphyicon-gif-maker-small:before {
        content: '\\e606';
    }
    .giphyicon-gifsu-small:before {
        content: '\\e607';
    }
    .giphyicon-slideshow-small:before {
        content: '\\e608';
    }
    .giphyicon-upload-small:before {
        content: '\\e609';
    }
    .giphyicon-gif-caption:before {
        content: '\\e904';
    }
`

export default giphyIcons
