import {
  emailValidator,
  noSpecialCharsValidator,
  passwordValidator,
  requireValidator,
  twinValidator,
} from './utils/validators';

export default [
  {
    inputType: 'text',
    label: 'Name',
    name: 'name',
    placeholder: 'Pepa',
    type: 'TextField',
    validator: [noSpecialCharsValidator, requireValidator],
  },
  {
    inputType: 'text',
    label: 'Surname',
    name: 'surname',
    placeholder: 'Pig',
    type: 'TextField',
    validator: [noSpecialCharsValidator, requireValidator],
  },
  {
    inputType: 'email',
    label: 'Email',
    name: 'email',
    placeholder: 'pepa@pig.es',
    type: 'TextField',
    validator: [emailValidator, requireValidator],
  },
  {
    inputType: 'email',
    label: 'Repite el email',
    name: 'emailRepeat',
    placeholder: 'pepa@pig.es',
    type: 'TextField',
    validator: [twinValidator('email', 'email')],
  },
  {
    inputType: 'password',
    label: 'Contraseña',
    name: 'password',
    placeholder: '********',
    type: 'TextField',
    validator: [passwordValidator, requireValidator],
  },
  {
    inputType: 'password',
    label: 'Repite la contraseña',
    name: 'passwordRepeat',
    placeholder: '********',
    type: 'TextField',
    validator: [twinValidator('password', 'password')],
  },
  {
    loading: false,
    name: 'submit',
    type: 'SubmitField',
    label: 'Send',
  },
];
