import { setLocale } from 'yup';

export default setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
  string: {
    min: ({ min }) => `Mínimo de ${min} dígitos`,
    max: ({ max }) => `Máximo de ${max} dígitos`,
  },
});
