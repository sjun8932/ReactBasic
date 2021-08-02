import React  from 'react';
import { Component } from 'react';

class Try extends Component {

    render(){
        return(
            <li><b style={{color:"#98FF98"}}>"{this.props.value.member}"</b>은 {this.props.value.feature} {this.props.index}번</li>
        );
    };
}


export default Try;