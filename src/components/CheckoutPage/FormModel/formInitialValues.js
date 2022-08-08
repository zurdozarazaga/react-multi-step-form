import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    email,
    phone,
    area,
    profession,
    job,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  },
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [profession.name]: '',
  [area.name]: '',
  [phone.name]: '',
  [job.name]: '',
};
