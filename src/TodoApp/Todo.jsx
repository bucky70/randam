import React from 'react';
export default class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            item:""
        };
        
    }
    handleChange=(e)=>{
     this.setState({
         item:e.target.value
     })

    }
    handleClick=()=>{
        this.setState({
            items:[...this.state.items,this.state.item]
        })

    }
    render(){
        return(
            <div>
                <h3>ToDo List</h3>
                <ToDo item={this.state.items}></ToDo>
                <input type='text' onChange={(e)=>this.handleChange(e)}/>
                <button onClick={this.handleClick}>Add #{this.items.length+1}</button>
            </div>
        )
    }
}
class ToDo extends React.Component{
    render(){
        return(
            <div>
               { this.props.items.map(item=>(<li key={item.id}>{item.item}</li>))}
            </div>
        )
    }
}