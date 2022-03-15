import {
  CHECKOUT_MODAL_CONTAINER,
  CHECKOUT_APP_TARGET_SELECTOR,
  DISMISS_CHECKOUT_BUTTON_SELECTOR,
  displayCheckout,
} from './dom-utils';

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

function bootstrapGoToPaymentButton() {
  debugger;
  const goToCheckoutButton = document.querySelector('.continue-to-payment-btn')
  debugger;
  goToCheckoutButton.addEventListener('click', (event) => {
    // TODO update route to #overview OR somehow remove base event listener
    event.preventDefault();
    displayCheckout(true);
  })
}


function bootstrapItemSelection() {

}

function bootstrapExitModal() {
  const dimissCheckoutButton = document.querySelector(DISMISS_CHECKOUT_BUTTON_SELECTOR);

  dimissCheckoutButton.addEventListener('click', () => {
    displayCheckout(false);
  })
}

async function main() {
  await bootstrapESDK({targetSelector: CHECKOUT_APP_TARGET_SELECTOR});

  bootstrapExitModal();

  bootstrapGoToPaymentButton();
}

main();