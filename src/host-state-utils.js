import {displayCheckout} from './dom-utils'

/**
 *
 * @param {function} onInputChange
 */
function bootstrapBatteryAndDriveChangeHandler (onInputChange) {
  const inputs = document.querySelectorAll('input[name=BATTERY_AND_DRIVE]');

  // Returns an iterator - not an array.
  for (const input of inputs) {
    input.addEventListener('input', onInputChange);
  }
}

function bootstrapPaintChangeHandler (onInputChange) {
  const inputs = document.querySelectorAll('input[name=PAINT]');
  // Returns an iterator - not an array.
  for (const input of inputs) {
    input.addEventListener('input', onInputChange);
  }
}

function bootstrapWheelsChangeHandler (onInputChange) {
  const inputs = document.querySelectorAll('input[name=WHEELS]');
  // Returns an iterator - not an array.
  for (const input of inputs) {
    input.addEventListener('input', onInputChange);
  }
}

function bootstrapInteriorChangeHandler (onInputChange) {
  const inputs = document.querySelectorAll('input[name=INTERIOR]');
  // Returns an iterator - not an array.
  for (const input of inputs) {
    input.addEventListener('input', onInputChange);
  }
}

function bootstrapFSDClickHandler (onClick) {
  const button = document.querySelector('button[aria-label=Select Option - Full Self-Driving Capability - $10,600]');

  button.addEventListener('click', onClick);
}

function bootstrapGoToPaymentButtonClickHandler (onClick) {
  const button = document.querySelector('button[data-id=continue-to-payment-button]')

  button.addEventListener('click', onClick);
}

function goToCheckoutHandler(event) {
  event.preventDefault();

  displayCheckout(true);
}

function batteryAndDriveChangeHandler (event) {
  updateCartState({
    BATTERY_AND_DRIVE: event.target.value,
  })
}

const updateCartState = (partialCartState) => {
  CartState = {
    ...CartState,
    ...partialCartState,
  };

  console.log('Updated Cart State', CartState);

  return CartState;
}

export const CartState = {
  INTERIOR: undefined,
  WHEELS: undefined,
  FSD: undefined,
  BATTERY_AND_DRIVE: undefined,
  PAINT: undefined,
};

export function bootstrapHostInteractions () {
  bootstrapGoToPaymentButtonClickHandler(goToCheckoutHandler);
  bootstrapBatteryAndDriveChangeHandler(batteryAndDriveChangeHandler);
}