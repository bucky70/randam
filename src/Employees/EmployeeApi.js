//import employeedata from './Employees/employeedata';
import axios from 'axios';
export default class EmployeeApi {
    static getEmployees(cb){      //cb not required for local
       // return employeedata.Employees;      loading from local memory
       axios.get('http://localhost:3001/Employees')
       .then(response =>cb(response.data))
       .catch(error=>{throw error});
    }

}