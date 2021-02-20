import { React } from "react";
import withItem from './withItem'
class EmployeeList extends React.Component{
    render(){
        const {itemInputted,handleItemInput,items,addItem}=this.props;    //destructuring
        let items=items.map((item,index)=>(
            <li key={index}>{item}</li>
        ))
        return(
            <div>
                <h2>{this.props.heading}</h2>
                <label>
                    Enter employee name:
                    <input type='text' value={itemInputted} onChange={(e)=>handleItemInput(e)}/>
                </label>
                <button onClick={()=>addItem(itemInputted)}>Add Employee[]HOC</button>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}
//Argument true is passed to store name as uppercase
export default withItem(EmployeeList,true);