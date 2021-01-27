import React from "react";
import {Form, Formik,useFormik} from "formik";
import * as Yup from "yup";
import "../formikDemo.css";
import { userData } from "./FormikDemo";
 
 const SignupForm = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
     validationSchema:Yup.object().shape({
        firstName:Yup.string()
        .max(12,"There must be 12 characters or less")
        .min(2,"There must be at least 2 characters")
        .required("Name field is required"),
        phoneNum:Yup.string()
        .max(10,"There must be 10 digits")
        .min(10,"There must be 10 digits")
        .required("Phone Number is required"),
        email:Yup.string()
        .email("Invalid Email Id")
        .required("Email is required")
    })
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       {formik.errors.firstName && formik.touched.firstName && (
            <p>{formik.errors.firstName}</p>
          )}
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default SignupForm;