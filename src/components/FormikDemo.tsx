import React, { useState } from "react";
import "../formikDemo.css";
import MyForm from './MyForm';

const FormikDemo = () => {
    const [form,setForm] = useState(false);
    const Details = [
        {name:"Haidarali",PhoneNum: 7387364512,Email:"haidrali@gmail.com"},
        {name:"Sandesh",PhoneNum: 8978765645,Email:"haider@email.com"},  
        {name:"Harry",PhoneNum: 3456789878,Email:"harry@gmail.com"},
        {name:"Ben",PhoneNum: 9978674512,Email:"ben@gmail.com"},
        {name:"Sohil",PhoneNum: 9878765645,Email:"sohil@gmail.com"},
        {name:"Root",PhoneNum: 8945364512,Email:"root@gmail.com"},
        ]
       
        
        const ListDetails = Details.map(item=>{
        return <div className="listDetails DetailsDisplay" key={item.Email}>
        <p>
        <button className="DetailsButton" 
        //id={item.Email}
        // value={item.name}
        onClick={()=>{
            setForm(true);
            // <MyForm key={item.Email.toString()}/>
        }}
        >{item.name}</button>
        </p>
        
        </div>
        })
        return(
            <>
            <div className="displayData">
                <div>{ListDetails}</div>
                <div>
                {form?<MyForm />:null}​​​​​
                </div>
            </div>
            </>
        
        )

    
}

export default FormikDemo;