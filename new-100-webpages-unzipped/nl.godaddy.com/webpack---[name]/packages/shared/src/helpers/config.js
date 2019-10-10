const _config = require('@exp/exp-utils/helper/config');

_config.merge({
    'tcc.listenerDisabled': false,
    'tcc.manualPagePerf': false,

    'tcc.eventDelayMs': 75,
    'tcc.perfDelayMs': 250,
    'tcc.consentDelayMs': 500,

    'tcc.gaAccountDev': 'UA-52262008-15',
    'tcc.gaAccountTest': 'UA-37178807-21',
    'tcc.gaAccountProd': 'UA-115508484-1',

    'tcc.buildEnv': 'production',
    'tcc.buildName': '@tcc/tcc',
    'tcc.buildVersion': '3.6.101',
    'tcc.buildDate': '2019-10-07T21:53:37.993Z',
    'tcc.splitioUrl': 'https://img1.wsimg.com/wrhs/076bb8f540d2229981290d2aabfd85e0/splitio.min.js',
    'tcc.splitioApiKey': '26b1lpi1u5ifu0ug7hj9t68j43qi0b1sulf6'
});

module.exports = _config;