const CLASS_DELIMITER = ' ';
const SLIDE_IN_CLASS = 'show-slider';
const OVERLAY_CLASS = 'overlay';
const SLIDE_CONTAINER_SELECTOR = '#slider-container'
export const CHECKOUT_APP_TARGET = 'checkout-app-target';
export const CHECKOUT_MODAL_CONTAINER = 'checkout-modal-container';

export function displayCheckout (hide = false) {
  const sliderContainer = document.querySelector(SLIDE_CONTAINER_SELECTOR);
  const checkoutModalContainer = document.querySelector(CHECKOUT_MODAL_CONTAINER);

  modifyClassName

}

function modifyClassName ({element, className, hide}) {
  let classNames = element.className.split(CLASS_DELIMITER);

  classNames = classNames.filter( name => hide ? name !== SLIDE_IN_CLASS : name );

  element.className = classNames.join(CLASS_DELIMITER);

  return element;
};