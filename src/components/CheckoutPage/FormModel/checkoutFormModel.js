const checkoutFormModel = {
  formId: "checkoutForm",
  formField: {
    firstName: {
      name: "firstName",
      label: "Nombre*",
      requiredErrorMsg: "First name is required",
    },
    lastName: {
      name: "lastName",
      label: "Apellido*",
      requiredErrorMsg: "Last name is required",
    },
    email: {
      name: "email",
      label: "Email*",
      requiredErrorMsg: "Email is required",
    },
    profession: {
      name: "profession",
      label: "¿En qué empresa trabajás?*",
      requiredErrorMsg: "business is required",
    },
    area: {
      name: "area",
      label: "¿En qué área de la empresa trabajás?*",
      requiredErrorMsg: "Area is required",
    },
    phone: {
      name: "phone",
      label: "Telefono",
    },
    job: {
      name: "job",
      label: "¿Cuál es tu puesto en la empresa?*",
      requiredErrorMsg: "job is required",
    },
  },
};

export default checkoutFormModel;
