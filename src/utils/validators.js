import isEmpty from 'lodash/isEmpty';

export const requireValidator = value => {
  const isValid = !isEmpty(value) && value;

  if (!isValid) {
    return 'El campo es obligatorio';
  }
};

export const emailValidator = value => {
  const regexPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regexPattern.test(String(value).toLowerCase())) {
    return 'El email no es válido';
  }
};

export const noSpecialCharsValidator = value => {
  const regexPattern = /[!@#€$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

  if (regexPattern.test(value)) {
    return 'No admite caracteres especiales';
  }
};

export const passwordValidator = value => {
  const oneNumberRegexPattern = /.*[0-9].*/;
  const oneLetterRegexPattern = /.*[a-zA-Z].*/;

  return [
    ...(!oneNumberRegexPattern.test(value) ? ['Al menos un número'] : []),
    ...(!oneLetterRegexPattern.test(value) ? ['Al menos una letra'] : []),
    ...(value.length < 8 ? ['Al menos 8 caracteres'] : []),
  ];
};

export const checkboxValidator = value => {
  if (!value || value === false) {
    return 'El campo es obligatorio';
  }
};

export const twinValidator = (twinFieldName, twinFieldLabel) => value => {
  const twinFieldValue = document.getElementsByName(twinFieldName)[0].value;

  if (value !== twinFieldValue) {
    return `El campo no coincide con el campo ${twinFieldLabel}`;
  }
};
