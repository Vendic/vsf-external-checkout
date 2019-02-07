import {Route} from 'vue-router'
import rootStore from '@vue-storefront/store'

export function afterEach(to: Route, from: Route) {
  // This is not working
  if (to.name === 'external-thank-you') {
    console.info(`Clearing cart`)
    rootStore.dispatch('cart/clear', {}, {root: true})
    rootStore.dispatch('cart/serverCreate', {guestCart: false}, {root: true})
  }
}
