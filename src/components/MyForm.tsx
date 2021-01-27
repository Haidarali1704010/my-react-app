import React, { useEffect } from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import "../formikDemo.css";
import { userData } from "./FormikDemo";


interface Propdata {
    userDetails?:userData,
}

const MyForm = ({userDetails}:Propdata) => {
    console.log(JSON.stringify(userDetails))
    const formik = useFormik({

        initialValues: {
          userName:userDetails?.userName ??"",
          phoneNum:userDetails?.phoneNum ??"",
          email: userDetails?.email ??"",
        },

        onSubmit: values => {
        
          alert(JSON.stringify(values, null, 2));
   
        },
        validationSchema:Yup.object().shape({
            userName:Yup.string()
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
        }),
        
   
      });

      useEffect(() => {
        if(userDetails){
          formik.setFieldValue("userName",userDetails.userName);
          formik.setFieldValue("phoneNum",userDetails.phoneNum);
          formik.setFieldValue("email",userDetails.email);
        }
        
    },[formik, userDetails]);

    return(     

<form onSubmit={formik.handleSubmit}>

    <label htmlFor="userName">Name</label>
    <input id="userName" name="userName" type="text"
    onChange={formik.handleChange}
    value={formik.values.userName} />

    <label htmlFor="phoneNum">Phone Number</label>
    <input id="phoneNum" name="phoneNum" type="text"
    onChange={formik.handleChange}
    value={formik.values.phoneNum} />

    <label htmlFor="email">Email Address</label>
    <input id="email" name="email" type="email"
    onChange={formik.handleChange}
    value={formik.values.email} />

    <button className="fmbtn" type="submit">Submit</button>

</form>
        
    );
}
export default MyForm;