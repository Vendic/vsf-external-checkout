const ExternalSuccessPage = () => import(/* webpackChunkName: "vsf-ExternalSuccessPage" */ '../pages/ExternalSuccess.vue');

export const routes = [
  { name: 'external-thank-you', path: '/order-success', component: ExternalSuccessPage, meta: { layout: 'default' } }
]
