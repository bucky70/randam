import React from 'react';
class Product extends React.Component{
    constructor(props){
        super(props);  //mandatory if you want to edit the state with props
    }
    render(){
        return(
            <div>
                Name: {this.props.name} <br/>
                Price:{this.props.price}<br/>
                company:{this.props.children}
            </div>
        );
    }
}
export class Products extends React.Component{
render(){
    return(
        <div>
            <Product name='telivision' price="15000">LG</Product>
            <Product name='mobile' price="10000">One Plus</Product>
            <Product name='refridgerator' price="15000">Samsung</Product>
        </div>
    )
}
}