import { getSyncLifecycle, defineConfigSchema } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';
import homeComponent from './views/home.component';
import { createDashboardLink } from './components/createDashboardLink.component';
import { dashboardMeta } from './config/dashboard.meta';

const moduleName = '@openmrs/esm-template-app';

const options = {
  featureName: 'root-world',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');


export const homeDashboardLink = getSyncLifecycle(createDashboardLink(dashboardMeta), options)


export const home = getSyncLifecycle(homeComponent, options);


export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}
