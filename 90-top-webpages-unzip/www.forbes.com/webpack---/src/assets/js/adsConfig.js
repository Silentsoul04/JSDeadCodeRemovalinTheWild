const desktopAdConfig = {
	single_request: true,
	positions: {
		top: {
			slot_id: 'top',
			sizes: [
				[728, 90],
				[970, 66],
				[970, 250],
				[970, 90],
				[7, 1],
				[1, 1],
				'fluid',
			],
			params: {
				hero: 'true',
			},
		},
		topx: {
			slot_id: 'topx',
			sizes: [
				[728, 90],
				[970, 66],
				[970, 250],
				[970, 90],
				[1, 1],
				'fluid',
			],
			incremental: true,
		},
		rec: {
			slot_id: 'rec',
			sizes: [
				[300, 250],
				[300, 600],
				[1, 1],
				'fluid',
			],
		},
		recx: {
			slot_id: 'recx',
			sizes: [
				[300, 250],
				[300, 600],
				[1, 1],
				'fluid',
			],
			incremental: true,
		},
		moreon: {
			slot_id: 'moreon',
			sizes: [
				[820, 236],
				[620, 529],
				[300, 250],
				[620, 236],
				'fluid',
			],
			incremental: true,
		},
		'spon-logo': {
			slot_id: 'spon-logo',
			sizes: [
				[120, 40],
				[300, 170],
				[300, 100],
				[1, 1],
			],
		},
		bottom: {
			slot_id: 'bottom',
			sizes: [
				[728, 90],
				[970, 250],
				[1, 1],
				'fluid',
			],
		},
		'ntv-home': {
			slot_id: 'ntv-home',
			sizes: [
				[2, 3],
				[1, 1],
				'fluid',
			],
			params: {
				strnativekey: 'QLWstPVbbpcwuyqK5ijhxZvL',
			},
		},
		'ntv-deskchannel': {
			slot_id: 'ntv-deskchannel',
			sizes: [
				[2, 3],
				[1, 1],
				'fluid',
			],
			params: {
				strnativekey: 'e5tSBXbDmvyVwXbVB7dymzCc',
			},
			incremental: true,
		},
	},
	amazonSlots: [
		{
			slotID: 'rec',
			sizes: [[300, 250]],
		},
		{
			slotID: 'recx',
			sizes: [[300, 250]],
		},
		{
			slotID: 'top',
			sizes: [[728, 90], [970, 250]],
		},
		{
			slotID: 'topx',
			sizes: [[728, 90], [970, 250]],
		},
		{
			slotID: 'bottom',
			sizes: [[728, 90], [970, 250]],
		},
	],
};

const mobileAdConfig = {
	mobile: true,
	safe_frame: true,
	single_request: true,
	positions: {
		artbottom: {
			slot_id: 'artbottom',
			sizes: [
				[1, 1],
				'fluid',
			],
		},
		inread: {
			slot_id: 'inread',
			sizes: [
				[600, 575],
				[1, 1],
				'fluid',
			],
		},
		'mob-logo': {
			slot_id: 'mob-logo',
			sizes: [
				[300, 50],
				[300, 75],
				[1, 1],
				'fluid',
			],
		},
		mobile: {
			slot_id: 'mobile',
			sizes: [
				[300, 50],
				[320, 50],
				[7, 1],
				[1, 1],
				'fluid',
			],
			params: {
				hero: 'true',
			},
		},
		mobilerec: {
			slot_id: 'mobilerec',
			sizes: [
				[300, 250],
				[300, 251],
				[300, 50],
				[320, 50],
				[1, 1],
				'fluid',
			],
			params: {
				strnativekey: '13b84c32',
			},
		},
		mobileint: {
			slot_id: 'mobileint',
			sizes: [
				[320, 480],
				[300, 600],
				[300, 250],
				[300, 50],
				[320, 50],
				[1, 1],
				'fluid',
			],
			incremental: true,
		},
		mobilex: {
			slot_id: 'mobilex',
			sizes: [
				[300, 250],
				[300, 50],
				[320, 50],
				[1, 1],
				'fluid',
			],
			params: {
				strnativekey: '13b84c32',
			},
			incremental: true,
		},
		'ntv-article': {
			slot_id: 'ntv-article',
			sizes: [
				[300, 250],
				[300, 50],
				[320, 50],
				[2, 3],
				[1, 1],
				'fluid',
			],
			params: {
				strnativekey: 'twzGG8q5aVPXGmiCccciYeT7',
			},
		},
		'ntv-contentm': {
			slot_id: 'ntv-contentm',
			sizes: [
				[1, 1],
			],
			params: {
				strnativekey: '6kez5JUH4RdqUg4xdkwSNADy',
			},
		},
		'ntv-mobhome': {
			slot_id: 'ntv-mobhome',
			sizes: [
				[2, 3],
				[1, 1],
				'fluid',
			],
			params: {
				strnativekey: 'QLWstPVbbpcwuyqK5ijhxZvL',
			},
		},
		'ntv-mobchannel': {
			slot_id: 'ntv-mobchannel',
			sizes: [
				[2, 3],
				[1, 1],
				'fluid',
			],
			params: {
				strnativekey: 'e5tSBXbDmvyVwXbVB7dymzCc',
			},
			incremental: true,
		},
		rec: {
			slot_id: 'rec',
			sizes: [
				[300, 250],
				[300, 600],
				[1, 1],
				'fluid',
			],
		},
		recx: {
			slot_id: 'recx',
			sizes: [
				[300, 250],
				[300, 600],
				[1, 1],
				'fluid',
			],
		},
		'spon-logo': {
			slot_id: 'spon-logo',
			sizes: [
				[120, 40],
				[300, 170],
				[300, 100],
				[1, 1],
			],
		},
		mobsearch: {
			slot_id: 'mobsearch',
			sizes: [
				[300, 250],
				[1, 1],
				'fluid',
			],
			incremental: true,
		},
	},
	amazonSlots: [
		{
			slotID: 'mobileint',
			sizes: [[320, 50], [300, 50]],
		},
		{
			slotID: 'mobile',
			sizes: [[320, 50]],
		},
		{
			slotID: 'mobilerec',
			sizes: [[300, 250], [320, 50]],
		},
		{
			slotID: 'mobilex',
			sizes: [[300, 250], [320, 50]],
		},
	],
};

module.exports = {
	desktopAdConfig,
	mobileAdConfig,
};



// WEBPACK FOOTER //
// ./src/assets/js/adsConfig.js