async function bootstrapESDK({checkoutElement}) {
  // Add script loader to page

  alert('Injected some JS.');

  const {default: appFactory } = await System.import('@ecom/checkout/mock')
  appFactory(
    `#${checkoutElement.id}`,
    {
      workflow: 'shipping',
      cartToken: 'abc123',
    });
}

function bootstrapGoToPaymentButton() {
  document.querySelector('.continue-to-payment-btn').addEventListener(
    'click',
    (event) => {
      event.preventDefault();
      alert('clicked')
    })
  }

function attachCheckoutModal() {
  const modalElement = document.createElement('div');
  modalElement.id = 'checkout-modal'

  document.querySelector('body').appendChild(modalElement);

  return modalElement;
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
  const checkoutModalElement = attachCheckoutModal();

  bootstrapESDK({checkoutElement: checkoutModalElement});

}

main();