import React from 'react';
import "./Counter.css";
export class Counter extends React.Component{
    constructor(){
        super() //cannot use "this" until super() is called
        this.state={
            counter:0        //we use state to save the data or have the data
        }
        // this.increment=this.increment.bind(this);//binding a method to class inside aconstructor
        // this.decrement=this.decrement.bind(this); no need to bind when using arrow functions
    }
   // <!--in line styling is a bit different refer video-->  
    render(){
      return(
        <div className="Counter">
          <h1>Counter</h1>
          <button onClick={this.increment}>Increment by {this.props.by}</button>
          <span>{this.state.counter}</span>       
          <button onClick={this.decrement}>Decrement by {this.props.by}</button>
          <br/>
          
        </div>
      );
    }
    increment=()=>{                     //can define functions within the class component
     console.log("increment");
     this.setState({
        counter : this.state.counter+this.props.by         //this.state.counter++; ++ not working use +1
    })  ;           // this.state.counter--; this will not work (we need to bind it with class)          
    }
    decrement=()=>{
     console.log("decrement");
      this.setState({
            counter : this.state.counter-this.props.by    //this.state.counter++; -- not working use -1
        })  ;       //we need to create an object within the setState to update the state as we cannot change the state directly

    }
    reset=()=>{
        this.setState({
         counter: 0
        })
    }
  }
  