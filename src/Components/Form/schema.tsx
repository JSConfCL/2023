export const nameValidation = {
  required: {
    value: true,
    message: "El nombre es requerido",
  },
  maxLength: {
    value: 100,
    message: "Máximo largo es de 100 caracteres",
  },
};

export const lastNameValidation = {
  required: {
    value: true,
    message: "El apellido es requerido",
  },
  maxLength: {
    value: 100,
    message: "Máximo largo es de 100 caracteres",
  },
};

export const emailValidation = {
  required: {
    value: true,
    message: "El email es requerido",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Escribe un email válido",
  },
  maxLength: {
    value: 1000,
    message: "Máximo largo es de 1000 caracteres",
  },
};

export const descriptionValidation = {
  required: {
    value: true,
    message: "la descripción del por qué es requerida",
  },
  maxLength: {
    value: 1000,
    message: "Máximo largo es de 1000 caracteres",
  },
};

export const optionalStringValidation = {
  maxLength: {
    value: 100,
    message: "Máximo largo es de 100 caracteres",
  },
};

export const notNegativeNumberValidation = {
  validate: {
    positive: (v: string | undefined) =>
      (v ? parseInt(v ?? "") >= 0 : true) || "Debe ser un número no negativo",
  },
};
