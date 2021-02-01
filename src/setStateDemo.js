import React from 'react';
export class SetStateDemo extends React.Component{
    constructor(){
        super();
        this.state={
            toggle:false
        };
    }
      toggleDisplayInfo = (params)=> {
        this.setState({
            toggle:!this.state.toggle
        });
        
    }
    render(){
        return(
            <div>
                <h1>welcome to the toggle tab</h1>
                {
                this.state.toggle ? 
                (<div>
                    <div>lorem ipsum bla bla bla </div>
                    <button onClick={this.toggleDisplayInfo}>Read Less</button>
                </div>):(<button onClick={this.toggleDisplayInfo}>Read More</button>)
               }
            </div>
        );
    }
}