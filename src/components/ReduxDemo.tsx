import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../redux.css";
import store from "../Store";
import {setFlag} from "../Actions/index";
import {AddUser} from "../Actions/index";
import List from "./List";

import { connect } from "react-redux";
export interface ListProp {
    name:any,
    phone:any ,
    city:any
}

const ReduxDemo = (props:any) => {
    const [name,setName] = useState<any>("");
    const [phone,setPhone] = useState<any>("");
    const [city,setCity] = useState<any>("");
    // const [list,setList] = useState<ListProp[]>([{name:'',
    //     phone:'',
    //     city:''    }]);
    //const [buttonFlag,setButtonFlag] = useState<boolean>(false);
    const phoneNumReg = /^[0-9]{10}$/;
    
    const listDetails = props?.list?.map((items:any,i:number) => {
        return (
            <div className="buttonsdiv" key={i}>
            <button className="listButton">{items.name}</button>
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
                alert(JSON.stringify(values, null, 2));
              },
          });
         

          
        

    return(
        <div className="reduxdemo">
            <div className="listdiv">
                {listDetails}
                {props.buttonFlag}
            </div>
            <div className="formClass">
                <form>

                <label htmlFor="name">Name</label>
                <input required id="name" name="name" type="text"
                onChange={(e) => setName(e.target.value)}
                value={name} />
                <p className="errpara">{formik.errors.name}</p>

                <label htmlFor="phone">Phone Number</label>
                <input required id="phone" name="phone" type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone} />
                <p className="errpara">{formik.errors.phone}</p>

                <label htmlFor="city">City</label>
                <input required id="city" name="city" type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city} />
                <p className="errpara">{formik.errors.city}</p>

                <button className="submitbtn" type="submit" onClick={(e) => {
                    e.preventDefault()
                    const newItem = {
                        name,
                        phone,
                        city
                    }
                    let j:number;
                    let flag=false;
                    // for(j=0;j<props?.list?.length;j++){
                    //     if(props.list[j].name===name){
                    //         alert("User with same name already present");
                    //         flag=true;
                    //         break;
                    //     }

                    // }
                    props.dispatch(AddUser(newItem));
                    props.dispatch(setFlag(true));
                    // if(flag===false){
                    //     props.dispatch(AddUser(newItem));
                    //     //setList([...list,newItem])
                    // }
                    
                    // setName("")
                    // setPhone(null)
                    // setCity("")


                }}>Submit</button>
                {/* <button className="deleteButton" onClick={(e) => {
                    e.preventDefault()
                    console.log(list)
                    const newItem = list.filter((item) =>item.name !== name)
                    setList(newItem)
                    console.log(newItem)
                    console.log(list)
                    

                }}>Delete</button> */}

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