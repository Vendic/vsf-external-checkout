import config from 'config'

import { StorefrontModule } from '@vue-storefront/core/lib/modules'
import { setupMultistoreRoutes } from '@vue-storefront/core/lib/multistore'
import { beforeEach } from './router/beforeEach'
import { routes } from './router/routes'

export const KEY = 'external-checkout'

export const ExternalCheckout: StorefrontModule = function (app, store, router, moduleConfig, appConfig) {
  router.beforeEach(beforeEach)
  setupMultistoreRoutes(config, router, routes, 10)
}
