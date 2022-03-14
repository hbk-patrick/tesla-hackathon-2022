const CLASS_DELIMITER = ' ';
const HIDDEN_CLASS = 'hidden';

export function attachModal(id) {

}

export function showElement(element) {
  const { class: classNames } = element;
  const modifiedClass = classNames.split(CLASS_DELIMITER)
    .filter(className => className !== HIDDEN_CLASS)
    .join(CLASS_DELIMITER);

  element.class = modifiedClass;

  return element;
}

export function hideElement(element) {
  return displayElement(element, true);
}

function displayElement(element, bHide) {
  const { class: classNames } = element;

  let processedClassNames = classNames.split(CLASS_DELIMITER)
    .filter(className => className !== HIDDEN_CLASS)

  if (bHide) {
    processedClassNames.push([HIDDEN_CLASS]);
  }

  element.class = processedClassNames.join(CLASS_DELIMITER);

  return element;
}