import React from 'react';
import {Component} from 'react';

class ResponseCheck extends Component {

    state = {
        state: 'waiting', //aqua
        message: '클릭해서 시작하세요',
        result: [],
    };

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const{ state } = this.state; // 매번 this.state가 쓰기 싫으면 미리미리 구조분해 할당을 해놓자....
        if ( state === 'waiting' ){
            this.setState({
                state: 'ready', // red
                message: '초록색이 되면 클릭하세요',
            });
            this.timeout = setTimeout(( )=> { // Q.) this.timeout 을 만들어주는 이유는?
                this.setState({
                    state:'now', // greenYellow
                    message:'지금클릭',
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready'){// 성급하게 클릭
            clearTimeout(this.timeout);
            this.setState({
                state: 'waiting', //aqua
                message: '너무 성급하게 누루셨어요 😤😤'
            })
        } else if (state === 'now'){ // 반응속도 체크
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 시작하세요',
                    result: [...prevState.result , this.endTime - this.startTime],
                };
            });
        }
    };

    onReset = () => {
        this.setState({
            result:[]
        });
    };

    renderAverage = () => {
        const {result} = this.state;
        return (

            result.length === 0 ? null :
                <>
                    <div> 평균시간 : {this.state.result.reduce((a,c) => a + c) / this.state.result.length}ms</div>
                    <button onClick={this.onReset}>리셋</button>
                </>
        )
    }

    render(){
        const { state, message } = this.state;
        return (
            <>
                <div id="screen" className={state} onClick={this.onClickScreen}>
                    {message}
                </div>
                {this.renderAverage()}
            </>
        );
    }
}

export default ResponseCheck;