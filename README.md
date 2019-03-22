# Vue Storefront External Checkout

With this extension you can use your CMS checkout (e.g. Magento) instead of default [Vue Storefront](https://github.com/DivanteLtd/vue-storefront) checkout.
This plugin requires cart and user sync on your backend (see [integrations](https://github.com/filrak/vsf-external-checkout#current-cms-integrations-for-this-extension) )

<center>
<img src="./media/diagram.png">
</center>

## Current CMS integrations for this extension

* [Magento 2](https://github.com/DivanteLtd/magento2-external-checkout)

## How it works?

When user tries to enter your Vue Storefront checkout:
1. The extension synchronizes cart and user data with your backend CMS
2. User is redirected to your CMS checkout (extension overrides `/checkout` route).

## Installation

### Manual installation

1. Download the [latest release](https://github.com/Vendic/vsf-external-checkout/releases) and extract it in `src/modules/external-checkout`

2. Add CMS address to your `config/local.json` file.
````json
"externalCheckout": {
  "cmsUrl" : "https://yourcmsaddress.com"
}
````
3. Enable cart synchronization for your Vue Storefront instance in `config/local.json`
````json
cart": {
  "synchronize": true,
  ...
}
````

4. Register the extension in `src/modules/index.ts` file
````js
import { ExternalCheckout } from './external-checkout'

export const registerModules: VueStorefrontModule[] = [
   // other extensions
  ExternalCheckout
]
````

5. Install the appropriate module for your CMS. Currently only [Magento 2](https://github.com/Vendic/magento2-external-checkout) is supported.

### Installation with Yarn
[This feature is not yet support](https://github.com/Vendic/vsf-external-checkout/issues/2)

## How to use for a specific stores in a multistore setup

You can specify which storeviews should use the external checkout by adding each store code to your `config/local.json` file.
````json
"externalCheckout": {
  "cmsUrl" : "https://yourcmsaddress.com",
  "stores": {
    "se": {
      "cmsUrl": "https://yourcmsaddress.com"
    },
    "dk": {
      "cmsUrl": "https://yourcmsaddress.com"
    }
  }
}
````

## How to integrate with other CMS

If you want to integrate this extension with your backend CMS make sure that entering `{your_CMS_url}/vue/cart/sync/token/{user-token}/cart/{cart_token}` will do the following:
1. Synchronize cart and user data between Vue Storefront and your CMS
2. Redirect user to external checkout

## Suggestions
For integrations with [Magento 2](https://github.com/DivanteLtd/magento2-external-checkout), also have a look at [this module that allows you to run Magento 2 in checkout only mode](https://github.com/Vendic/magento2-checkout-only)
