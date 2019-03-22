import {Route} from 'vue-router'
import rootStore from '@vue-storefront/core/store'
import config from 'config'
import {storeCodeFromRoute} from '@vue-storefront/core/lib/multistore'

export function beforeEach(to: Route, from: Route, next) {

  const cartToken: string = rootStore.state.cart.cartServerToken;
  const userToken: string = rootStore.state.user.token;
  const externalCheckoutConfig = {...config.externalCheckout};
  const cmsUrl: string = externalCheckoutConfig.cmsUrl;
  const stores = externalCheckoutConfig.stores;
  const storeCode = storeCodeFromRoute(to)
  const multistoreEnabled: boolean = config.storeViews.multistore

  if (multistoreEnabled) {
    if (storeCode in stores && to.name === storeCode + '-checkout') {
      window.location.replace(stores[storeCode].cmsUrl + '/vue/cart/sync/token/' + userToken + '/cart/' + cartToken)
    } else {
      next()
    }
  } else {
    if (to.name === 'checkout') {
      window.location.replace(cmsUrl + '/vue/cart/sync/token/' + userToken + '/cart/' + cartToken)
    } else {
      next()
    }
  }
}
