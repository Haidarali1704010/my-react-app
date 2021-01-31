import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../redux.css";
// import store from "../Store";
import {AddUser} from "../Actions/index";
import {UserClick} from "../Actions/index";
import {DeleteUser} from "../Actions/index";
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
            (document.getElementById("name")as any).value=User.name;
            (document.getElementById("phone")as any).value=User.phone;
            (document.getElementById("city")as any).value=User.city;

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
                console.log(values.phone);
                console.log(values.name);
                console.log(values.city);

                    const name =values.name;
                    const phone =values.phone;
                    const city =values.city;
                    
                    console.log(phone);
                    let flag = false;
                    const checkDuplicate = props.list.map((items:any) => {
                        if(items.phone === values.phone){
                            flag=true;
                        }
                        else{
                            flag=false;
                        }
                    });
                    console.log(flag);
                    console.log(checkDuplicate);

                    if(flag){
                        alert("User with same Phone Number already Exists.")
                    }
                    else{
                        const newItem = {
                            name,
                            phone,
                            city
                        }
                        props.dispatch(AddUser(newItem));
                        (document.getElementById("name")as any).value="";
                        (document.getElementById("phone")as any).value="";
                        (document.getElementById("city")as any).value="";

                    }
                    
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

                <button className="submitbtn" type="submit" disabled={!formik.dirty || !formik.isValid}
                >Submit</button>
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