import React from 'react';

export default class Employee extends React.Component{
    render(){
        return(
           
         
        <tr>
            <td>{this.props.empid}</td>
            <td>{this.props.name}</td>
            <td>{this.props.band}</td>
        </tr>       
                
            
        );
    }
}
// const Employee =({empid,name,band})=>
//     (
//         <tr>
//             <td>{empid}</td>
//             <td>{name}</td>
//             <td>{band}</td>
//         </tr>
//     );
//     export default Employee