import React, {useState} from "react";
import { Button,Form,Col,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import validateAdd from "./Validation";

    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = true; 
const FormDetails = () => {
    const [addresserr,setAddress] = useState("");
    const [apart,setApart] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [zipcode,setZipcode] = useState("");
    const [submitAlert,setSubmitAlert] = useState("");
    
    // var flag5 = true;

    const validateAdd= (val) =>{
        var valreg = /^[a-zA-Z0-9- ]{2,30}$/;
        if(valreg.test(val)){
            setAddress("");
             flag1 = true;
            
            checkAllFlags();
        }else{
            flag1 = false;
            setAddress("Alphanumeric Character shoud be entered of length between 2 to 30");
        }
        
    }
    const validateCity= (val) =>{
        var valreg = /^[a-zA-Z]{1,15}$/;
        if(valreg.test(val)){
            setCity("");
            flag2 = true;
            checkAllFlags();

        }else{
            flag2 = false;
            setCity("Must be in limit 1-15 characters and not contain digits");
        }
        
    }

    const validateState= (val) =>{
        var valreg = /^[a-zA-Z]{1,15}$/;
        if(valreg.test(val)){
            setState("");
            flag3 = true;
            checkAllFlags();
        }else{
            flag3 = false;
            setState("Must Not exceed 15 characters and not contain digits");
        }
        
    }

    const validateApart = (val)=> {
        var valreg = /^[a-zA-Z0-9]{0,15}$/;
        
        if(valreg.test(val)){
            setApart("");
            flag5=true;
            checkAllFlags();
        }else{
            flag5=false;
            checkAllFlags();
           
            setApart("Must Not exceed 15 characters");
        }
    }

    const validateZipcode = (val) => {
        var valreg = /^[0-9]{5}$/;
        var valreg2 = /^[a-zA-Z]*$/;
        if(valreg.test(val)){
            setZipcode("");
            flag4 = true;
            checkAllFlags();
        }else{
                // if(valreg2.test(val)){
                //     setZipcode("Zipcode must be digit only")
                // }
                // else{
                //     setZipcode("");
                //     }
                flag4 = false;
                    setZipcode("Not a standard zipcode");
            }
            
    }
    const checkAllFlags = () =>{
        if(flag1 && flag2 && flag3 && flag4 && flag5){
            document.getElementById("btnflag").disabled=false;
            setSubmitAlert("All Information is filled correctly");
        setTimeout(function(){
            document.getElementById("alerttxt").innerHTML = "";
        }, 3000);
        }
        else{
            document.getElementById("btnflag").disabled=true;  
            
        }

    }

    const buttonClick = () => {
        
    }
        



    return(
        
            <div className="totalbody">
                <Container className="bodycontainer">
                    <a href="/">
                    <Link to="/">← Back</Link>
                    </a>
                    <br/><br></br>
                    <h4>Change home address</h4>
                    <h3><b>Home Address:</b></h3>
                    <p>This is where we send your debit and credit cards.</p>
                    <Form>
                        <div className="form-group">
                        <label className="inputlabel mt-3">Street Address*</label>
                        <div className="inputField">
                            <input id="address" className="inputField" type="text" required onChange={e =>{validateAdd(e.target.value);checkAllFlags();}} placeholder="1234 Main St"/>
                             
                        </div>
                        <div>
                        <span id="adderr">{addresserr}</span>
                        </div>
                        <label className="inputlabel mt-3">Apt, Suite</label>
                        <div className="inputField">
                            <input id="apt" className="inputField" type="text" onChange={e =>{validateApart(e.target.value);checkAllFlags();}} placeholder="Suite 900"/>
                        </div>
                        <div>
                            <span id="adderr">{apart}</span>
                        </div>
                        <label className="inputlabel mt-3">City*</label>
                        <div className="inputField">
                            <input id="city" className="inputField" type="text" required onChange={e =>{validateCity(e.target.value);checkAllFlags();}} placeholder="San Francisco"/>
                        </div>
                        <div>
                            <span id="adderr">{city}</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            <label className="inputlabel mt-3">State*</label>
                            <div className="inputField">
                                <input id="state" className="inputField" type="text" required onChange={e =>{validateState(e.target.value);checkAllFlags();}} placeholder="CA"/>
                            </div>
                            <div>
                            <span id="adderr">{state}</span>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <label className="inputlabel mt-3">Zipcode*</label>
                            <div className="inputField">
                                <input id="zipcode" className="inputField" type="text" required onChange={e =>{validateZipcode(e.target.value);checkAllFlags();}} placeholder="95607"/>
                            </div>
                            <div>
                            <span id="adderr">{zipcode}</span>
                            </div>
                        </div>
                        </div>
                        <div className="divbutt">
                            <Button id ="btnflag" disabled className="btndiv" variant="primary" onClick={e =>buttonClick()} type="submit">
                            Next
                            </Button>
                        </div>
                        <div id="alerttxt" className="alert alert-success mt-3" role="alert">
                            {submitAlert}
                        </div>
                        

                        </div>
                    </Form>
                    {/* <Form>
                    
                        <Form.Group controlId="formGridAddress1">
                        <Form.Label>Street Address: </Form.Label>
                        <Form.Control className="inputField" placeholder="1234 Main St" />
                        </Form.Group>
                        
                        <Form.Group controlId="formGridApt">
                            <Form.Label>Apt, Suite: </Form.Label>
                            <Form.Control className="inputField" placeholder="Suite 900" />
                        </Form.Group>
                        
                        <Form.Group controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control className="inputField" placeholder="San Francisco" />
                        </Form.Group>
                        
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State: </Form.Label>
                            <Form.Control className="inputField" placeholder="CA" />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip Code: </Form.Label>
                        <Form.Control className="inputField" placeholder="956071" />
                        </Form.Group>
                        </Form.Row>
                        
                        <div className="divbutt">
                            <Button className="btndiv" variant="primary" type="submit">
                            Next
                            </Button>
                        </div>
                    </Form> */}
                </Container>
            </div>
                
            

        
    );
};

export default FormDetails;