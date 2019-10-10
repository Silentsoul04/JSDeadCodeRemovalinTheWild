import {
    Application
} from 't3js';
import solid from '@buzzfeed/buzzblocks/js/services/solid';
import SiteComponentList from '@buzzfeed/buzzblocks/components/site-component-list/site-component-list.js';

import apiService from '@buzzfeed/buzzblocks/js/services/recsys-api';

Application.addModule(
    'recsys-list',
    new SiteComponentList(apiService, solid).generateModule()
);