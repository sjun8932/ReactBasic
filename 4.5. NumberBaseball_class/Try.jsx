import React  from 'react';
import { Component } from 'react';

class Try extends Component {

    state = {
        result: this.props.result,
        try: this.props.try,
    };
    // 클래스에서 자식 컴포넌트가 state를 변경하고 싶으면 state를 재정의 해주면 된다.

    render() {
        return (
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </li>
        );
    }
}

export default Try;