import React from 'react';
import PropTypes from 'prop-types';
export class PropValidation extends React.Component{
    render(){
        return(
            <div>
                <h1>React Js prop validation example</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>
                    <tr>
                        <td>Array</td>
                        <td>{this.props.arraye}</td>
                        <td>{this.props.arraye?"valid":"invalid"}</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>{this.props.booli?"true":false}</td>
                        <td>{this.props.booli?"valid":"invalid"}</td>
                    </tr>
                    <tr>
                        <td>Function</td>
                        <td>{this.props.funck(5)}</td>
                        <td>{this.props.funck(5)?"valid":"invalid"}</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{this.props.stringu}</td>
                        <td>{this.props.stringu?"valid":"invalid"}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{this.props.numberu}</td>
                        <td>{this.props.numberu? "valid":"invalid"}</td>
                    </tr>
                </table>
            </div>
        );
    }
}
PropValidation.PropType={                         //validating the proptypes
    arraye:PropTypes.array.isRequired,
    booli:PropTypes.bool.isRequired,
    funck:PropTypes.func.isRequired,
    stringu:PropTypes.string.isRequired,
    numberu:PropTypes.number.isRequired

}
PropValidation.defaultProps={                      //setting default values to prop types
    arraye:[10,20,30,40],
    booli:true,
    funck:function(x){return x+5;},
    stringu:"hello there",
    numberu:true
}