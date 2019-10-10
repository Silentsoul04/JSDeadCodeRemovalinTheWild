export const trackNavClick = ({
    label,
    location
}) => {
    window.bfa('track/raw/ga', {
        data: {
            category: `Nav:${location}`,
            action: 'click',
            label
        }
    });
};

export const trackNavImpression = ({
    label,
    location
}) => {
    window.bfa('track/raw/ga', {
        data: {
            category: `Nav:${location}`,
            action: 'impression',
            label
        }
    });
};