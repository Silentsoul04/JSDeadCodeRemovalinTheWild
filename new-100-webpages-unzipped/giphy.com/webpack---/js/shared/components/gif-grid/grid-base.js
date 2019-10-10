import React, {
    Component
} from 'react' // eslint-disable-line no-unused-vars

class GridBase extends Component {
    getContainer() {
        throw 'Grid.js getContainer not overridden'
    }
    getElements() {
        throw 'Grid.js getElements not overridden'
    }
    getGifWidth() {
        throw 'Grid.js getGifWidth not overridden'
    }
    getGifHeight() {
        throw 'Grid.js getGifHeight not overridden'
    }
}

export default GridBase