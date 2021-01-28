import React, { useEffect, useState } from "react";
import { FormikHelpers, FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import "../formikDemo.css";
import { userData } from "./FormikDemo";


interface Propdata {
    userDetails?:userData,
    handleSubmit: (values: FormikValues) => void;
}
const MyForm1 = ({userDetails,handleSubmit}:Propdata) => {
    const phoneNumReg = /^[0-9]{10}$/;
     const [flag,setFlag] = useState(false);
    const demo = ()=> {
        if(formik.dirty){
            if(formik.isValid){
                setFlag(false);
            }
        }
        else if(!formik.isValid || !formik.dirty){
            setFlag(true);
        }
        setFlag(false);
    }
    const formik = useFormik({
        initialValues: {
            userName:userDetails?.userName ??"",
            phoneNum:userDetails?.phoneNum ??"",
            email: userDetails?.email ??"",

        },
                
        validationSchema:Yup.object().shape({
            userName:Yup.string()
            .max(12,"There must be 12 characters or less")
            .min(2,"There must be at least 2 characters")
            .required("Name field is required"),
            phoneNum:Yup.string()
            // .test(
            //     "valid",
            //     "Non- Valid",
            //     (value) =>{
            //         if(value.match(phoneNumReg)){
            //             return true;
            //         }
            //     }
            // ),
            .matches(phoneNumReg,"There must be 10 digits")
            // .max(10,"There must be 10 digits")
            // .min(10,"There must be 10 digits")
            .required("Phone Number is required"),
            email:Yup.string()
            .email("Invalid Email Id")
            .required("Email is required")
        }),
        // onSubmit: values => {
            
            
        //   },
          onSubmit:(values): void =>

            handleSubmit(values)

           
      });
      useEffect(() => {
          if(userDetails){
            formik.setFieldValue("userName",userDetails.userName,false);
            formik.setFieldValue("phoneNum",userDetails.phoneNum,false);
            formik.setFieldValue("email",userDetails.email,false);
          }
          
      },[userDetails]);

      const handleAdd = () => {

      }
      
      return(
          
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="userName">Name</label>
            <input id="userName" name="userName" type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}/>
            <p className="errpara">{formik.errors.userName}</p>

            <label htmlFor="phoneNum">Phone Number</label>
            <input id="phoneNum" name="phoneNum" type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNum} />
            <p className="errpara">{formik.errors.phoneNum}</p>

            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email"
            onChange={formik.handleChange}
            value={formik.values.email} />
            <p className="errpara">{formik.errors.email}</p>
        
            <button className="fmbtn" type="submit" disabled={!formik.dirty || !formik.isValid}>Submit</button>
            

        </form>
      );
    
};

export default MyForm1;