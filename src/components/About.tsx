import React from "react";

const AboutUs = () => {

    return(
        <div className="conatiner-fluid text-center ab">
            <div className="firstrow">
                <div className="about">
                <h1 id="dev">Developed By</h1>
                </div>
            </div>
            <div className="row secondrow">
                <div className="card">
                <img src="https://i.imgur.com/xuqF3XH.jpeg" className="card-img-top" alt="cardimg"/>
                <div className="card-body">
                    <h5 className="card-title">Haidarali Shaikh</h5>
                    <p className="card-text">Email id- haidarali.shaikh@emtecinc.com <br/>From- Satara</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            
        </div>
        
        
        
    );
}

export default AboutUs;