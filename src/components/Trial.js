import React, { useState } from "react";

const Text = () => {
     const [name, setName] = useState("");

     const handleClick = (e) => {
        setName(document.getElementById("NameInput").value);
        //document.getElementById("Name").innerHTML= document.getElementById("NameInput").value;

     };
     return (
         <div className="trialtext">
             <label id="entertext">Enter a text : </label>
             {/* <input onChange={e => setName(e.target.value)}></input> */}
             <input type="text" className="form-control mb-3" id = "NameInput"></input>
             <button id="txtbtn" className="btn btn-dark" onClick={handleClick}>Click Here !</button>
             <p id="Name">{name}</p>
                     
             
            </div>
     );
};

export default Text;