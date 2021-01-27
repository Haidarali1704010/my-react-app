import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const BootsNew = ()=> {


    return(
        <>
    <div className="container-fluid">
        <div className="bread">
            <h3 id="brd">Breadcrumb</h3>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb mt-3">
                <li className="breadcrumb-item"><a href="/Game">Game</a></li>
                <li className="breadcrumb-item"><a href="/Trial">Trial</a></li>
                <li className="breadcrumb-item"><a href="/About">About</a></li>
                <li className="breadcrumb-item"><a href="/Form">Form</a></li>
                <li className="breadcrumb-item"><a href="/BootComp">BootStrap</a></li>
                <li className="breadcrumb-item active" aria-current="page">BootStrapNew</li>
            </ol>
            </nav>
        </div>

        <div className="list-group lst">
                
            <a href="/Game" className="list-group-item list-group-item-action">Game Page</a>
            <a href="/Trial" className="list-group-item list-group-item-action">Trial Page</a>
            <a href="/About" className="list-group-item list-group-item-action">About Page</a>
        </div>
        <h3>BootStrap Floats</h3>
        <div className="boot-floats">
            <div className="float-sm-right">Float right on small screens or wider</div><br/>
            <div className="float-md-right">Float right on medium screens or wider</div><br/>
            <div className="float-lg-right">Float right on large screens or wider</div><br/>
            <div className="float-xl-right">Float right on extra large screens or wider</div><br/>
            <div className="float-none">Float none</div>
        </div>
        <div className="btnclass mt-5">
            <h3>BootStrap Buttons</h3>
            <button type="button" className="btn ">Basic</button>
            <button type="button" className="btn btn-primary ml-4">Primary</button>
            <button type="button" className="btn btn-secondary ml-4">Secondary</button>
            <button type="button" className="btn btn-success ml-4">Success</button>
            <button type="button" className="btn btn-info ml-4">Info</button>
            <button type="button" className="btn btn-warning ml-4">Warning</button>
            <button type="button" className="btn btn-danger ml-4">Danger</button>
            <button type="button" className="btn btn-dark ml-4">Dark</button>
            <button type="button" className="btn btn-light ml-4">Light</button>
            <button type="button" className="btn btn-link ml-4">Link</button>
        </div>

    </div>

    

       
        
     </>   
    );

}

export default BootsNew;