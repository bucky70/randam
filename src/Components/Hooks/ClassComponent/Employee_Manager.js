import { render } from '@testing-library/react';
import React from 'react';

export default class Appe extends React.Component{
    constructor(props)
    {super(props);
        this.state={
            empname: 'Ram',
            bManager: false
        };}
handleTextInput=(e)=>{
    this.setState({empname: e.target.value})
}
handleCheckBox=()=>{
    this.setState(prevState=>{
        bManager=!prevState.bManager
    });
}
render(){
    let role=bManager?"Manager":"Employee";
    return(
        <div>
            <h2>State Demo</h2>
            <label>
                Employee name:
                <input type='text' onInput={(e)=>this.handleTextInput(e)} defaultValue={this.state.empname}></input>
            </label>
            <label>
                <input type='checkbox' onChange={(e)=>this.handleCheckBox(e)} defaultValue={this.state.bManager}></input>
            </label>
            <p>{this.state.empname} is {role}</p>
        </div>

    )
}
}