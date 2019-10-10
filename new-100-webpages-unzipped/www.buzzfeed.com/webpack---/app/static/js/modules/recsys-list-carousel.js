import {
    Application
} from 't3js';
import solid from '@buzzfeed/buzzblocks/js/services/solid';
import SiteComponentCarousel from '@buzzfeed/buzzblocks/components/site-component-carousel/site-component-carousel.js';

import apiService from '@buzzfeed/buzzblocks/js/services/recsys-api';

Application.addModule(
    'recsys-list-carousel',
    new SiteComponentCarousel(apiService, solid).generateModule()
);