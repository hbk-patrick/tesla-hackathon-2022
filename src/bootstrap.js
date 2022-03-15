import { CHECKOUT_APP_TARGET, displayCheckout } from './dom-utils';

async function bootstrapESDK({targetId}) {
  // Add script loader to page
  const {default: appFactory } = await System.import('@ecom/checkout/mock')
  const app = appFactory(
    `#${targetId}`,
    {
      workflow: 'shipping',
      cartToken: 'abc123',
    });

  return app;
}

function bootstrapGoToPaymentButton() {
  document.querySelector('.continue-to-payment-btn').addEventListener(
    'click',
    (event) => {
      event.preventDefault();
      alert('clicked')
    })
  }

function showElement(element) {
  const { class: classNames } = element

  classNames.split(' ')
}

function hideElement() {

}

function bootstrapItemSelection() {

}

function main() {

  bootstrapESDK({targetId: CHECKOUT_APP_TARGET});

}

main();