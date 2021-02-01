import  React from 'react';
import Employee from './Employee';
export default  class EmployeeList extends React.Component{
    render(){
        let EmployeeNodes=this.props.employees.map(employee=>(
            <Employee empid={employee.empid} name={employee.name} band={employee.band}></Employee>
        ));
        return(
            <table style={{border:"1px solid black"}}>
                <thead>
                    <th>EmployeeId</th>
                    <th>Name</th>
                    <th>Band</th>
                </thead>
                <tbody>
                {EmployeeNodes}
                </tbody>
            </table>
        );
    }
}