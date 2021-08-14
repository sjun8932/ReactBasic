import React from 'react';
import {Component} from "react";

const rspCoords = {
    바위 : '0',
    가위 : '-142px',
    보 : '-284px',
};

const scores = {
    가위 : 1,
    바위 : 0,
    보 : -1,
};

class RSP extends Component {

    state = {
        result: '',
        imgCoord: '0',
        score: 0,
    };

    interval;

    componentDidMount() {
        this.interval = setInterval( () => {
            const {imgCoord} = this.state;
            if (imgCoord === rspCoords.바위){
                this.setState({
                    imgCoord: rspCoords.가위,
                });
            } else if (imgCoord === rspCoords.가위){
                console.log('here');
                this.setState({
                    imgCoord: rspCoords.보,
                });
            } else if (imgCoord === rspCoords.보){
                this.setState( {
                    imgCoord: rspCoords.바위,
                });
            }
        },1000);
    }

    componentDidUpdate() { // 리렌더링 후

    }

    componentWillUnmount() {// 컴포넌트가 제거되기 직전 실행되는 메서드 입니다.
        clearInterval(this.interval);
    }

    onClickBtn = (choice) => {

    };

    render() {
        const {result, score, imgCoord} = this.state;
        return (
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
                <div>
                    <button id="바위" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
                    <button id="가위" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
                    <button id="보" className="btn" onClick={this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RSP;