const CLASS_DELIMITER = ' ';

const SLIDE_IN_CLASS = 'esdk-show-slider';
const OVERLAY_CLASS = 'esdk-overlay';
const HIDDEN_CLASS = 'hidden';

const SLIDE_CONTAINER_SELECTOR = '#slider-container'
export const CHECKOUT_APP_TARGET_SELECTOR = '#checkout-app-target';
export const CHECKOUT_MODAL_CONTAINER = '#checkout-modal-container';
export const DISMISS_CHECKOUT_BUTTON_SELECTOR = '#dismiss-checkout-btn';
export const TESLA_ROOT_SELECTOR = '#root';

export function displayCheckout (display = true) {
  const sliderContainer = document.querySelector(SLIDE_CONTAINER_SELECTOR);
  const checkoutModalContainer = document.querySelector(CHECKOUT_MODAL_CONTAINER);
  const rootTeslaAppContainer = document.querySelector(TESLA_ROOT_SELECTOR);

  modifyClassName({
    element: sliderContainer,
    className: SLIDE_IN_CLASS,
    remove: !display,
  });
  modifyClassName({
    element: checkoutModalContainer,
    className: OVERLAY_CLASS,
    remove: !display,
  });
  modifyClassName({
    element: rootTeslaAppContainer,
    className: HIDDEN_CLASS,
    remove: !display,
  });

}

function modifyClassName ({element, className, remove}) {
  let classNames = element.className.split(CLASS_DELIMITER);

  classNames.push(className);
  classNames = classNames.filter( name => remove ? name !== className : name );

  element.className = classNames.join(CLASS_DELIMITER);
  debugger;
  return element;
};