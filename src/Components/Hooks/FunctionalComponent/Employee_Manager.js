import { render } from '@testing-library/react';
import React, { useState } from 'react';

const checkBoxComponent=()=>{
    const [check,setChecked]=useState(true);
    let currentstate=check? "checked":"unchecked"
    // handleCheckBox=(e)=>{
    //     setChecked(!check)
    //  }
    handleCheckBox=(e)=>{
   (prevState=>{
        setChecked=!prevState.setChecked
    });
}
    return(
        <div>
            <h2>State Demo</h2>
            
            <label>
                <input type='checkbox' onChange={(e)=>handleCheckBox(e)} defaultValue={check}></input>
            </label>
            <p>{currentstate}</p>
        </div>

    )
    
}
const titleComponent=()=>{
    const [title,setTitle]=useState("");
    
handleTitle=(e)=>{
  setTitle(e.target.value)
}
    return(
        <div>
            <h2>State Demo</h2>
            
            <label>
                <input type='text' onChange={(e)=>handleCheckBox(e)} defaultValue={title}></input>
            </label>
            <p>{title}</p>
        </div>

    )
}
//useState in functional component doesnot merge values wheareas setState in class component automatically does it
const FullNameComponent=()=>{
 const [fullname,setFullName] = useState({firstName:'',lastName:''});     //fulname fiels will contain firstname and lastname
 const handleFirstName=(e)=>setFullName({...fullname,firstName:e.target.value});       //setFullname is a function reference, will change the entire fullname
 const handleLastName=(e)=>setFullName({...fullname,lastName:e.target.value});       //we use spread operator to manually merge the values
  return(
      <div>
          <h3>useState-object</h3>
          <label>
              Enter first name:
              <input type="text" onChange={handleFirstName} defaultValue={fullname.firstName}/>
          </label>
          <label>
              Enter last name:
              <input type="text" onChange={handleLastName} defaultValue={fullname.lastName}/>
          </label>
          <span>fullname: {fullname.firstName} {fullname.lastName}</span>
      </div>
  )
}
const EmployeeComponent=()=>{
    const [employees,setEmployees]=useState([]);
    const addEmployee=()=>{setEmployees([...employees,`Emp ${employees.length}`])};
    return(
        <div>
            <h3>usestate - array</h3>
            <button onClick={addEmployee}>Add Employee</button>
            <ul>
            {
             employees.map((employee,index)=>(<li key={index}>{employee}</li>))     //map,filter,reduce
            }
            </ul>
        </div>
    )
}
