import {
  CHECKOUT_APP_TARGET_SELECTOR,
  DISMISS_CHECKOUT_BUTTON_SELECTOR,
  displayCheckout,
} from './dom-utils';
import { bootstrapHostInteractions } from './host-state-utils';

async function bootstrapESDK({targetSelector}) {
  // Add script loader to page
  const {default: appFactory } = await System.import('@ecom/checkout/mock')
  const app = appFactory(
    targetSelector,
    {
      workflow: 'shipping',
      cartToken: 'abc123',
    });

  return app;
}

function bootstrapExitModal() {
  const dimissCheckoutButton = document.querySelector(DISMISS_CHECKOUT_BUTTON_SELECTOR);

  dimissCheckoutButton.addEventListener('click', () => {
    displayCheckout(false);
  })
}

async function main() {
  bootstrapHostInteractions();
  await bootstrapESDK({targetSelector: CHECKOUT_APP_TARGET_SELECTOR});

  bootstrapExitModal();

  // Handle route changes
  window.addEventListener('hashchange', () => {
    if(location.hash === '#overview'){
      bootstrapHostInteractions();
    }
  });

}

main();