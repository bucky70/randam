import React from 'react';
import  DefectList from "./DefectList";
import { DefectApi } from "./DefectApi";
export default class AllDefectsPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            defects:[]
        };
        
        
    }
    componentDidMount(){
        //this.setState({defects:DefectApi.getDefects()});
        DefectApi.getDefects(data=>this.setState({defects:data}));
    };
    render(){
        return(

            <div>
                <h1>
               Issue List
            </h1>
            <DefectList defects={this.state.defects}></DefectList>
            </div>
        );
    }
}