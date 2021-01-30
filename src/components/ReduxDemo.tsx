import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../redux.css";
import store from "../Store";
import {setFlag} from "../Actions/index";
import {AddUser} from "../Actions/index";
import {UserClick} from "../Actions/index";
import {DeleteUser} from "../Actions/index";



import List from "./List";

import { connect } from "react-redux";
export interface ListProp {
    name:string,
    phone:string ,
    city:string
}

const ReduxDemo = (props:any) => {
    
    const phoneNumReg = /^[0-9]{10}$/;
    
    const listDetails = props?.list?.map((items:any,i:number) => {
        return (
            <div className="buttonsdiv" key={i}>
            <button className="listButton" onClick={(e) => {
                const name=items.name;
                const phone = items.phone;
                const city = items.city;
                const User={
                name,
                phone,
                city
            }
            props.dispatch(UserClick(User));
            }}>{items.name}</button>
            {/* {buttonFlag ? <button className="deleteButton" onClick={(e) => {
                    e.preventDefault()
                    // console.log(list)
                    const newItem = props.list.filter((item:any) =>item.name !== items.name)
                    // setList(newItem)
                    console.log(newItem)
                    console.log(props.list)
                    

                }}>Delete</button>:null} */}
            </div>
        );
    }
         );

         const formik = useFormik({
            initialValues: {
                name:'',
                phone:'',
                city:''
    
            },
                    
            validationSchema:Yup.object().shape({
                name:Yup.string()
                .max(10,"There must be 10 characters or less")
                .min(3,"There must be at least 3 characters")
                .required("Name is required"),
                
                phone:Yup.string()
                .matches(phoneNumReg,"There must be 10 digits")
                .required("Phone Number is required"),

                city:Yup.string()
                .max(10,"There must be 10 characters or less")
                .min(3,"There must be at least 3 characters")
                .required("City is required")
            }),
            onSubmit: values => {
                const name =(document.getElementById("name")as any).value;
                    const phone =(document.getElementById("phone")as any).value;
                    const city =(document.getElementById("city")as any).value;
                    const newItem = {
                        name,
                        phone,
                        city
                    }
                    let j;
                    // for(j=0;j<props.list.length;j++){
                    //     // if(props.list.phone[j]===phone){
                    //     //     console.log("matched");
                    //     //     alert("User with same phone number already exists");
                    //     // }
                    //     console.log(phone);
                    //    console.log(props.list.phone[j]);
                    //     console.log("unmatched");


                    // }
                    props.dispatch(AddUser(newItem));
                    (document.getElementById("name")as any).value="";
                    (document.getElementById("phone")as any).value="";
                    (document.getElementById("city")as any).value="";



                    console.log(JSON.stringify(values,null,2));
                // alert(JSON.stringify(values, null, 2));
              },
          });
          useEffect(() => {
            if(props.User){
              formik.setFieldValue("name",props.User.name,false);
              formik.setFieldValue("phone",props.User.phone,false);
              formik.setFieldValue("city",props.User.city,false);
            }
            
        },[props.User]);
         

          
        

    return(
        <div className="reduxdemo">
            <div className="listdiv">
                {listDetails}
                {props.buttonFlag}
            </div>
            <div className="formClass">
                <form onSubmit={formik.handleSubmit}>

                <label htmlFor="name">Name</label>
                <input required id="name" name="name" type="text"
                 onChange={formik.handleChange}
                 value={formik.values.name}
                />
                <p className="errpara">{formik.errors.name}</p>

                <label htmlFor="phone">Phone Number</label>
                <input required id="phone" name="phone" type="text"
                 onChange={formik.handleChange}
                 value={formik.values.phone}
                />
                <p className="errpara">{formik.errors.phone}</p>

                <label htmlFor="city">City</label>
                <input required id="city" name="city" type="text"
                 onChange={formik.handleChange}
                 value={formik.values.city}
                />
                <p className="errpara">{formik.errors.city}</p>

                <button className="submitbtn" type="submit">Submit</button>
                <button className="deleteButton" onClick={(e) => {
                    e.preventDefault()
                    const delUser:string = (document.getElementById("phone")as any).value;
                     const newItem = props.list.filter((item:any) =>item.phone !== delUser);
                    // console.log(newItem)
                    
                    props.dispatch(DeleteUser(newItem));
                    

                }}>Delete</button>

                </form>
            </div>
        </div>

    );
    
};
const mapStateToProps = (state: { list :ListProp[],buttonFlag:boolean } ) => ({
    list:state.list,
    buttonFlag:state.buttonFlag,

}); 

export default connect(mapStateToProps,null)(ReduxDemo);