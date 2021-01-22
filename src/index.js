import React from "react";
import ReactDom from "react-dom";
//import "./index.css";
import Game from "./components/Game";
import Trial from "./components/Trial";
import App from "./App"
import About from "./components/About";
 import Form from "./components/Form";



// const myelem = (
//     <div>
//         <h1>Hello I am Haidarali</h1>
//         <h1>First Trial</h1>
//     </div>
// );

// class Demo extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.state = {color:"Red"};
//     }
//     render(){
//         return <h2>I am a {this.state.color} color</h2>
//     }
// }


ReactDom.render(<App/>, document.getElementById("root"));

