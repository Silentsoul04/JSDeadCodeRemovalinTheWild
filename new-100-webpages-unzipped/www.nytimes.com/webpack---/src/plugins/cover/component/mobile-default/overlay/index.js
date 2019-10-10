import preact from 'preact'; // eslint-disable-line no-unused-vars

export default () => {
    const style = {
        backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)
    `,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    };

    return <div style = {
        style
    }
    />;
};



// WEBPACK FOOTER //
// ./src/plugins/cover/component/mobile-default/overlay/index.js