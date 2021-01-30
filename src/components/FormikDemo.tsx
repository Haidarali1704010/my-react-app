import { FormikValues } from "formik";
import React, { useState } from "react";
import "../formikDemo.css";
import "../formikDemo.css";
import MyForm1 from "./MyForm1";
import {AddUser} from "../Actions/index";
import store from "../Store";
import { connect } from "react-redux";


export interface userData {
    id:number,
    userName:string,
    phoneNum:number,
    email:string
    
}
const detailsList = [
    {id:1,userName:"Haidarali",phoneNum: 7387364512,email:"haidrali@gmail.com"},
    {id:2,userName:"Sandesh",phoneNum: 8978765645,email:"sandesh@email.com"},  
    {id:3,userName:"Harry",phoneNum: 3456789878,email:"harry@gmail.com"},
    {id:4,userName:"Ben",phoneNum: 9978674512,email:"ben@gmail.com"},
    {id:5,userName:"Sohil",phoneNum: 9878765645,email:"sohil@gmail.com"},
    {id:6,userName:"Root",phoneNum: 8945364512,email:"root@gmail.com"},
    ];

const FormikDemo = ():React.ReactElement => {
    const [key,setKey] = useState(0);


        const ListDetails = detailsList.map((detail:userData) => {
            return(
                <div className="listDetails " key={detail.id}>
                    <p>
                    <button className="DetailsButton" id = {detail.id.toString()} value={detail.userName}
                    onClick={(e:any) =>{
                        const id = Number(e.target.id);
                        setKey(id);
                        console.log(key);
                    
                    }}>
                    {detail.userName}
                    </button>
                    </p>
                </div>
            );
        });
        const handleSubmit = (values:FormikValues) => {
            console.log(values);
        }
        // const handleSubmit = (values: FormikValues): void => {​​
            
        
        //     };
        return(
        
            <div className="displayData">
                <div>{ListDetails}</div>
                <div className="formikform">
                <MyForm1 handleSubmit={handleSubmit} userDetails={detailsList.find((detail:userData) =>detail.id === key)}/>​​​​​
                </div>
            </div>
            
        
        );
    
}

export default FormikDemo;