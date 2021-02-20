import React from 'react';
export default class EmployeeListNormal extends React.Component{         //similar to todo app
    constructor(props){
        super(props)
        this.state={
            empname: '',
            employees: []
        }
    }
    handleEmployeeInput=(e)=>{
        this.setState({empname:e.target.value})   //check
    }
    addEmployee=(name)=>{
        this.setState(prevState=>{
            return {employees:[...prevState.employees,name.toUpperCase()]}      //check
        })
    }
    render(){
        let employees=this.state.employees.map((employee,index)=>(
            <li key={index}>{employee}</li>
        ))
        return(
            <div>
                <h2>{this.props.heading}</h2>
                <label>
                    Enter employee name:
                    <input type='text' value={this.state.empname} onChange={(e)=>this.handleEmployeeInput(e)}/>
                </label>
                <button onClick={()=>this.addEmployee(this.state.empname)}>Add Employee</button>
                <ul>
                    {employees}
                </ul>
            </div>
        )
    }
}