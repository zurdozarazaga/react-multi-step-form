import checkoutFormModel from "./checkoutFormModel";
const {
  formField: { firstName, lastName, email, phone, area, profession, job },
} = checkoutFormModel;

const Fields = {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [profession.name]: "",
  [area.name]: "",
  [phone.name]: "",
  [job.name]: "",
};

export default Fields;
