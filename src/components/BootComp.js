import React, {useState} from "react";
import { Button,Form,Col,Container,Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



const Boots = ()=> {


    return(
        <>
    <div className="container-fluid">
           
            <div className="dropd">
            <h3 id="drophead">Dropdown</h3>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Page
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>Game</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Trial</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Form</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div> 
        </div>
        <h3>Multiple Progress Bar</h3>
        <div class="progress mt-4">
            <div class="progress-bar bg-success pb1">
                Free Space
            </div>
            <div class="progress-bar bg-warning pb2">
                Warning
            </div>
            <div class="progress-bar bg-danger pb3">
                Danger
            </div>
            <div class="progress-bar progress-bar-striped pb4">
                Not Allocated
            </div>
        </div>
        <div class="tab mt-2">
        <h3>Table</h3>         
        <table class="table table-hover">
            <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>City</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Haidarali</td>
                <td>Shaikh</td>
                <td>Satara</td>
            </tr>
            <tr>
                <td>Sandesh</td>
                <td>Yadav</td>
                <td>Karad</td>
            </tr>
            </tbody>
        </table>
        <div className="spinclass">
            <h3>Spinners</h3>
            <div className="spinner-border ml-5" role="status">
            <span className="visually-hidden ml-5">Load</span>
            </div>
            <div class="spinner-grow text-primary ml-5" role="status">
            <span class="visually-hidden ml-5">Loading...</span>
            </div>
        </div>
        
    </div>
      
     </>   
    );

}

export default Boots;