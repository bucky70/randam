import React from 'react';
export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }
    static getDerivedStateFromError(error){  //Key Word
        return {
            hasError:true
        }
    }
    componentDidCatch(error,info){           //Key Word
        console.log("===>erroe "+error);
        console.log("===>info "+JSON.stringify(info));
    }
    render(){
        console.log(this.props.id);
        let prefix=this.props.id?this.props.id+')':''
        if(this.state.hasError){
            return <p style={{color:"red"}} >{prefix} Error Occured</p>
        }
        return this.props.children
    }
}