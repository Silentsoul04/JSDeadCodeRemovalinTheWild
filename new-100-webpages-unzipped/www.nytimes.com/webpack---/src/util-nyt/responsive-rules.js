export const classSizes = {
    XXSMALL: {
        className: 'vhs-xxs',
        rule: 'lte',
        size: 335
    },
    XSMALL: {
        className: 'vhs-xs',
        rule: 'lt',
        size: 390
    },
    SMALL: {
        className: 'vhs-s',
        rule: 'lt',
        size: 540
    },
    MEDIUM: {
        className: 'vhs-m',
        rule: 'lt',
        size: 720
    },
    LARGE: {
        className: 'vhs-l',
        rule: 'lt',
        size: 945
    },
    XLARGE: {
        className: 'vhs-xl',
        rule: 'lt',
        size: 1050
    },
    XXLARGE: {
        className: 'vhs-xxl',
        rule: 'gte',
        size: 1050
    }
};

export const orderedClassSizes = [
    classSizes.XXSMALL,
    classSizes.XSMALL,
    classSizes.SMALL,
    classSizes.MEDIUM,
    classSizes.LARGE,
    classSizes.XLARGE,
    classSizes.XXLARGE
];

export const orderedClassNames = orderedClassSizes.map(size => size.className);



// WEBPACK FOOTER //
// ./src/util-nyt/responsive-rules.js