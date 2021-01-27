import React from "react";
import { Dropdown} from "react-bootstrap";
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
        <div className="progress mt-4">
            <div className="progress-bar bg-success pb1">
                Free Space
            </div>
            <div className="progress-bar bg-warning pb2">
                Warning
            </div>
            <div className="progress-bar bg-danger pb3">
                Danger
            </div>
            <div className="progress-bar progress-bar-striped pb4">
                Not Allocated
            </div>
        </div>
        <div className="tab mt-2">
        <h3>Table</h3>         
        <table className="table table-hover">
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
            <div className="spinner-grow text-primary ml-5" role="status">
            <span className="visually-hidden ml-5">Loading...</span>
            </div>
        </div>
        
    </div>
      
     </>   
    );

}

export default Boots;