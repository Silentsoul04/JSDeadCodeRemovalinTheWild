import { FIELDS } from 'shared/components/form/fields'
import { map } from 'lodash'
const create = (tooltip, key) => [key, { tooltip }]
const Tooltips = {
    artist: map(
        {
            [FIELDS.email]: 'Please use the email at which we can most easily reach you.',
            [FIELDS.username]: 'Numbers, underscores and other special characters are discouraged here.',
            [FIELDS.contact]: 'Use your full name in this field (ex. Jane Smith). Pseudonyms are also acceptable.',
            [FIELDS.displayName]:
                'Double check your Display Name contains the text you would like to display on your Artist account.',
            [FIELDS.primarySite]:
                'Enter the full URL to a spot online that best represents your work (ex: ours would be http://giphy.com).',
            [FIELDS.displayName]:
                'Double check your Display Name contains the text you would like to display on your Artist account.',
            [FIELDS.socialURL]:
                'Enter the full URL of the social media account associated with your artwork. (ex: http://instagram.com/giphy).',
        },
        create,
    ),
    brand: map(
        {
            [FIELDS.email]:
                'Brands are required to use an email address with a company domain (ex: jane@businessname.com).',
            [FIELDS.username]:
                'Your GIPHY username must accurately reflect the name of your business (numbers, underscores and other special characters are discouraged here).',
            [FIELDS.displayName]:
                'Double check your Display Name contains the text you would like to display on your Brand account.',
            [FIELDS.contact]: 'Use your full name in this field (ex. Jane Smith).',
            [FIELDS.primarySite]: `Brand applications require a working link to the business' custom web domain in this field (ex: ours would be http://giphy.com). For Brands, social accounts do not qualify here.`,
            [FIELDS.socialURL]: `Enter the full URL of the social media account that best represents you or your brand’s web presence. (ex: http://instagram.com/giphy). If you are applying for a Brand channel and are verified elsewhere, it would be best to use that link here.`,
        },
        create,
    ),
}

export default Tooltips
