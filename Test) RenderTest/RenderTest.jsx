import React from 'react';
import {Component} from 'react';

class RenderTest extends Component {
    state = {
        counter : 0
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.counter !== nextState.counter){
            return true; //렌더링 됌
        }
        return false; // 렌더링 안됌
    }

    onClick = () => {
        this.setState({});
    }

    render(){
        console.log('렌더링', this.state)
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default RenderTest;