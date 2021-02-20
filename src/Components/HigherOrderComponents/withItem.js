import React from 'react';
const withItem=(WrappedComponent,toUpper)=>{
    class WithItem extends React.Component{
        constructor(props){
            super(props);
            this.state={
                itemInputted: '',
                items: []
            }
        }
        handleItemInput=(e)=>{
            this.setState({itemInputted:e.target.value})   //check
        }
        addItem=(name)=>{
            this.setState(prevState=>{
                return {items:[...prevState.items,toUpper?name.toUpperCase():name]}      //check
            })
        }
        render(){
           
            return(
                <WrappedComponent
                itemInputted={this.state.itemInputted}
                handleItemInput={this.handleItemInput}
                items={this.state.items}
                addItem={this.addItem}
                {...this.props}
                />
            )
        }
    }
    return WithItem;
}