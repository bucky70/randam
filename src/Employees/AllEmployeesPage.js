import React from 'react';
import  EmployeeList from './EmployeeList';
import  EmployeeApi  from './EmployeeApi';
export default class AllEmployeesPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employees:[]
        };
        
        
    }
    componentDidMount(){
        //this.setState({employees:EmployeeApi.getEmployees()});
        EmployeeApi.getEmployees(data => this.setState({employees:data}));
    };
    render(){
        return(

            <div>
                <h1>
                Employees from json server
            </h1>
            <EmployeeList employees={this.state.employees}></EmployeeList>
            </div>
        );
    }
}