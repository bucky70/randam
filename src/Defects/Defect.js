import React from 'react';

export default class Defect extends React.Component{
    render(){
        return(
           
         
        <tr>
            <td>{this.props.Id}</td>
            <td>{this.props.Issue}</td>
            <td>{this.props.Severity}</td>
            <td>{this.props.Status}</td>
        </tr>       
                
            
        );
    }
}