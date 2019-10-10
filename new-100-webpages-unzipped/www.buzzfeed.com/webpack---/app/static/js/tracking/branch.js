import branch from 'branch-sdk';
import {
    Application
} from 't3js';
import bzfd from '@buzzfeed/buzzblocks/js/services/bzfd';

let initialized = false;
const init = ({
    approvedModules = []
} = {}) => {
    if (initialized) {
        return;
    }
    initialized = true;

    const opts = {
        // We don't have specific vendor consent for branch.io and it's not a part of the public vendorlist
        // If someone has rejected all vendors then we will disable branch tracking
        'tracking_disabled': !approvedModules.length,
        metadata: {
            category: bzfd.pageName,
            quiz: bzfd.pageName === 'quizzes',
            language: window.BZFD.Context.page.localization.language
        }
    };

    const {
        branchKey
    } = window.BZFD.Config;
    branch.init(branchKey, opts, () => {
        if (window.BZFD.Config.env !== 'prod') {
            console.log('Branch.io initialized');
        }
    });
};

Application.on('message', ({
    data: {
        message,
        messageData
    }
}) => {
    if (message !== 'gdpr') {
        return;
    }
    init(messageData);
});