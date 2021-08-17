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

function computerChoice(imgCoord) {
    return Object.entries(rspCoords).find(function (v){
        return v[1] === imgCoord;
    })[0];
}

class RSP extends Component {

    state = {
        result: '',
        imgCoord: '0',
        score: 0,
    };

    interval;

    componentDidMount() {
        this.interval = setInterval(this.changeHand, 100 );
    }

    componentDidUpdate() { // 리렌더링 후

    }

    componentWillUnmount() {// 컴포넌트가 제거되기 직전 실행되는 메서드 입니다.
        clearInterval(this.interval);
    }

    changeHand = () => {
        const {imgCoord} = this.state;
        if (imgCoord === rspCoords.바위){
            this.setState({
                imgCoord: rspCoords.가위,
            });
        } else if (imgCoord === rspCoords.가위){
            this.setState({
                imgCoord: rspCoords.보,
            });
        } else if (imgCoord === rspCoords.보){
            this.setState( {
                imgCoord: rspCoords.바위,
            });
        }
    }

    onClickBtn = (choice) => () =>  {
        const {imgCoord} = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0) {
            this.setState({
                result: '비겼습니다.',
            });
        } else if( [-1,2].includes(diff)){   // 컴퓨의 초기 세팅 = 바위 ( 0점 ) 승리 조건 => 사용자의 보 + 컴퓨터의 바위 , 사용자의 가위  컴퓨터의 보 즉 diff 값이 -1 이거나 2
            this.setState((prevState)=>{
                return{
                    result : '이겼습니다',
                    score : prevState.score + 1,
                };
            });
        } else {
            this.setState((prevState)=>{
                return {
                    result : '졌습니다',
                    score : prevState.score -1,
                };
            });
        }
        setTimeout( () => {
            this.interval = setInterval (this.changeHand, 100);
        }, 1000);
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