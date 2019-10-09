import { Application } from 't3js';
import SiteComponentThumbstrip from '@buzzfeed/buzzblocks/components/site-component-thumbstrip/site-component-thumbstrip-standalone.js';
import apiService from '@buzzfeed/buzzblocks/js/services/recsys-api';
import solid from '@buzzfeed/buzzblocks/js/services/solid';

Application.addModule('recsys-thumbstrip', ctx => new SiteComponentThumbstrip(apiService, solid, ctx));
