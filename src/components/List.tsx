import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../redux.css";
import store from "../Store";
import {setFlag} from "../Actions/index";
import {AddUser} from "../Actions/index";
import { connect } from "react-redux";
import { ListProp } from "../components/ReduxDemo";

const List = (props:any) =>{
    return (
        <p>
            {props.list.map((list:any,i:number) => {
                <p key = {i}>{list.name}
                </p>
            })}
            </p>
    );

};
const mapStateToProps = (state: { list : {data:any} } ) => ({
    list:state.list.data,

});



export default connect(mapStateToProps)(List);
