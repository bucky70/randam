import  React from 'react';
import Defect from './Defect';
export default  class DefectList extends React.Component{
    render(){
        let DefectNodes=this.props.defects.map(defect=>(
            <Defect Id={defect.Id} Issue={defect.Issue} Severity={defect.Severity} Status={defect.Status}></Defect>
        ));
        return(
            <table style={{border:"1px solid black"}}>
                <thead>
                    <th>Id</th>
                    <th>Issue</th>
                    <th>Severity</th>
                    <th>Status</th>
                </thead>
                <tbody>
                {DefectNodes}
                </tbody>
            </table>
        );
    }
}