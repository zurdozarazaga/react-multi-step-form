export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required'
    },
    email: {
      name: 'email',
      label: 'email*',
      requiredErrorMsg: 'Email is required'
    },
    profession: {
      name: 'profession',
      label: '¿En qué empresa trabajás?*',
      requiredErrorMsg: 'business is required',
    },
    area: {
      name: 'area',
      label: '¿En qué área de la empresa trabajás?*',
      requiredErrorMsg: 'Area is required'
    },
    phone: {
      name: 'phone',
      label: 'State/Province/Region'
    },
    job: {
      name: 'job',
      label: '¿Cuál es tu puesto en la empresa?*',
      requiredErrorMsg: 'job is required',
    },
    country: {
      name: 'country',
      label: 'Country*',
      requiredErrorMsg: 'Country is required'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use this address for payment details'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      requiredErrorMsg: 'Name on card is required'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
};
