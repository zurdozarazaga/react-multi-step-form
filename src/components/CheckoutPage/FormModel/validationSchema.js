import * as Yup from "yup";
import checkoutFormModel from "./checkoutFormModel";
const {
  formField: { firstName, lastName, email, job, profession, area },
} = checkoutFormModel;

const mailFormat =
  /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

const validationSchema = [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string()
      .required(`${email.requiredErrorMsg}`)
      .matches(mailFormat, `${email.requiredErrorMsg}`),
    [job.name]: Yup.string().required(`${job.requiredErrorMsg}`),
    [profession.name]: Yup.string().required(`${profession.requiredErrorMsg}`),
    [area.name]: Yup.string().required(`${area.requiredErrorMsg}`),
  }),
];

export default validationSchema;
