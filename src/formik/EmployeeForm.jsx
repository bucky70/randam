import React from 'react';
import withFormik from 'formik';
const EmployeeForm =({values})=>{           //destructuring values received form FormikEmployeeForm
    <div>
        <h1>Employees</h1>
        <form>
            <div>
                <input type='text' placeholder="EmployeeName" value={values.empname} name="empname"/>
            </div>
            <div>
                <labe>
                    <input type="checkbox" checked={values.manager} name="manager"/>
                    Manager
                </labe>
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </div>
}
const FormikEmployeeForm= withFormik({                //whatever FormikEmployeeForm returns it will be taken as "values" for EmployeeForm
    mapPropsToValues({employeename,bManager})
   {
    return{
        empname:employeename||'',
        manager:bManager||false
    }
   }
})(EmployeeForm)
export default FormikEmployeeForm