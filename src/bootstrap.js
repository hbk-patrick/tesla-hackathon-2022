import {
  CHECKOUT_APP_TARGET_SELECTOR,
  DISMISS_CHECKOUT_BUTTON_SELECTOR,
  displayCheckout,
} from './dom-utils';
import { bootstrapHostInteractions } from './host-state-utils';


const APPLICATION_ID = 'sq0id-my-app-id';

async function bootstrapESDK({targetSelector}) {
  // Add script loader to page
  const {default: appFactory, SDK } = await System.import('@ecom/checkout/mock')


  return {
    SDK
  };
}

function bootstrapExitModal() {
  const dimissCheckoutButton = document.querySelector(DISMISS_CHECKOUT_BUTTON_SELECTOR);

  dimissCheckoutButton.addEventListener('click', () => {
    displayCheckout(false);
  })
}

async function main() {
  window.setTimeout(bootstrapHostInteractions, 1000);
  const { app, SDK } = await bootstrapESDK({targetSelector: CHECKOUT_APP_TARGET_SELECTOR});

  const ecom = SDK.Ecommerce(APPLICATION_ID);
  const orderSession = await ecom.orderSession();
  await orderSession.updateItems({})
  const checkoutInstance = await orderSession.checkout();
  checkoutInstance.attach(CHECKOUT_APP_TARGET_SELECTOR);


  // bootstrapExitModal();

  // Handle route changes
  window.addEventListener('hashchange', () => {
    if(location.hash === '#overview'){
      window.setTimeout(bootstrapHostInteractions, 1000);
    }
  });

}

main();