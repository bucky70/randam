import React, { useEffect, useState } from "react";
import axios from "axios";
const EmployeesComponent=()=>{
    const [employees,setEmployees]=useState([]);
    useEffect(()=>{
        axios.get('http;//localhost:3001/employee')
        .then(response=>setEmployees(response.data))
        .catch(error=>console.log("error"))
    },[]);
} 
return(
    <div>
        <h3>Employees</h3>
        <ul>
            {employees.map(employee=>(
                <li key={employee.id}>{employee.id}.{employee.name}</li>
            ))}
        </ul>
    </div>
)
const EmployeeComponent=()=>{
    const [employee,setEmployee]=useState({});
    const [id,setId]=useState(1);

    useEffect(()=>{
        axios.get(`http;//localhost:3001/employee/${id}`)
        .then(response=>setEmployee(response.data))
        .catch(error=>{console.log("Error")})
    },[id])                      //why put id here?

return(
    <div>
        <h3>Employee Details</h3>
        <label>
            Employee Id:
            <input type="number" value={id} min={1} maax={3} onChange={(e)=>setId(e.target.value)}/>

        </label>
        <p>{employee.id} {employee.name} {employee.location}</p>
    </div>
)

}
