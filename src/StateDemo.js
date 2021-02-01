import React from 'react';
export class Product extends React.Component{
    constructor(){
        super();
        this.state={
            name:'television',
            price:15000
        };
    }
    render(){
        return(
               <div>
                   Name:{this.state.name}
                   price:{this.state.price}
               </div>
        );
    }
}