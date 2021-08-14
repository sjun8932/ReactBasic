import React from 'react';
import {Component} from "react";

// 클래스의 경우 constructor -> render ->

class RSP extends Component {

    state = {
        result: '',
        imgCoord: 0,
        score: 0,
    };

    componentDidMount() { // 컴포넌트가 첫 렌더링 된 후 실행되는 메서드입니다.

    }

    componentDidUpdate() { // 리렌더링 후

    }

    componentWillUnmount() {// 컴포넌트가 제거되기 직전 실행되는 메서드 입니다.

    }

    render() {
        const {result, score, imgCoord} = this.state;
        return (
            <>
                <div id="computer" style={{background: `url(../Image/23182267.jpg) ${imgCoord} 0`}}/>
                <div>
                    <button id="scissor" className="btn" onClick={() => "onClickBtn(가위)"}>가위</button>
                    <button id="rock" className="btn" onClick={() => "onClickBtn(바위)"}>바위</button>
                    <button id="paper" className="btn" onClick={() => "onClickBtn(가위)"}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RSP;