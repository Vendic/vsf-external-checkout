import {VueStorefrontModule, VueStorefrontModuleConfig} from '@vue-storefront/core/lib/module'
import {beforeEach} from './router/beforeEach'
import {afterEach} from "./router/afterEach"
import {routes} from './router/routes';

const store = {
  namespaced: true,
  state: {
    key: null
  }
}

export const KEY = 'external-checkout'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: {modules: [{key: KEY, module: store}]},
  router: {beforeEach, afterEach, routes}
}

export const ExternalCheckout = new VueStorefrontModule(moduleConfig)
