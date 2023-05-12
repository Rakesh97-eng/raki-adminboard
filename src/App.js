import React from "react";
import Childone from "./childone";

import "./App.css"
import { WithRouter } from "./withrouter";
import games from './assests/games.jpg'

class App extends React.Component {
  state = { counter: 0 };
  addcounter (){
    
     this.setState({counter:this.state.counter+1})
  }

  componentDidMount(){
    // let cars = {car:"tata"}
    // let vehicle= {name:"car"}
    // let car = Object.assign({},cars,vehicle);
    //object.create("it needs an object")
    // normal method
    //new object()
 let str = "rakesh"
  let newstr = str.split("")
  console.log(newstr.concat(['ty']));
    // let object = {name:"rakesh",age:"25",greet:function(){
    //   console.log("welcome");
    // }}
    // object["lastname"]= "raj"
    // console.log("jhjkh",object.greet());

    if(true){
      console.log("iuiuou");
    }
    class User {
      constructor(firstname,lastname,hobbies){
        this.firstname = firstname;
        this.lastname = lastname;
        this.hobbies = hobbies;
      }
    }

    let {firstname} = new User("david","raj","photography")

    console.log("davidddddd",firstname);


    function Car (name,model){
        this.carname=name;
        this.model = model;
    }

    let newcar = new Car("bike","k")
   console.log(newcar.model);


   let arr = [{name:"rakesh",age:3},{name:"rakesh",age:3},{name:"rakesh",age:3},{name:"rakesh",age:3}]
   let values =  arr.forEach((value)=>console.log(value.age))
   console.log(values);
    
  }

   
  navigate(value){
    console.log("props",this.props);
    switch (value){
      case "Dashboard":
       this.props.navigate('/dashboard');
       break

      case "Files":
        this.props.navigate('/files');
        break
    }
    
     
  }

  render() {
    
    return (
      <>

     

      
          <button onClick={()=>this.navigate("Dashboard")}>Dashboard</button>
          <button onClick={()=>this.navigate("Files")}>File conversion</button>
      {/* //units
          <div style={{fontSize:"5px"}}>
              <div style={{height:"10rem",backgroundColor:"blue"}}></div>            
              <div style={{height:"10em",backgroundColor:"black"}}></div>            
          </div> */}
     {/* //max min width */}
     {/* <div style={{fontSize:"25px",maxWidth:"800px"}}>
              <div style={{height:"10rem",backgroundColor:"blue",color:"black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>            
              {/* <div style={{height:"10em",backgroundColor:"black"}}></div>             */}
          {/* </div>
          <div style={{fontSize:"5px",margin:"2px"}}>
              {/* <div style={{height:"10rem",backgroundColor:"blue", minWidth:"500px"}}></div>             */}
              {/* <div style={{height:"10em",backgroundColor:"black"}}></div>            
          </div> */} 


       <div className="gridcontainer">
        <div className="griditems" >item1</div>
        <div className="griditems2">item2</div>
        <div className="griditems3">item3</div>
        <div className="griditems4">item4</div>
        {/* <div className="griditems"><4div>
        <div className="griditems"></div4
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        <div className="griditems"></div>
        */}
       </div>
      

       
      </>
    );
  }
}

export default WithRouter(App);
