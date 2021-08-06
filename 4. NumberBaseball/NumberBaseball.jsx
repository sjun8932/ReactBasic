import React, {Component} from 'react'; // 1. import React from 'react' + 2. import {Component} from 'react';
import Try from './Try';


class NumberBaseball extends Component {

    getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
        const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const array = [];
        for (let i = 0; i < 4; i += 1) {
            const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            array.push(chosen);
        }
        return array;
    }

    constructor(props) {
        super(props);
        this.state = {
            result: '',
            value: '',
            answer: this.getNumbers(), // ex : [1,3,5,7]
            tries: [],
            true: '정답!! 🤣🤣🤣🤣🤣',
            false: '틀렸어요 🤣🤣🤣🤣🤣'
        };
        const {answer} = this.state;
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        console.log("정답은 " + answer);
    }

    onChangeInput(e) {
        // input html 태그의 onChange 에서 보내진 값을 담당
        this.setState({
            value: e.target.value,
        });
    };

    onSubmitForm(e) {
        const {answer , value, tries} = this.state;
        e.preventDefault();
        console.log(value + " --> 이 값은 input 태그에서 onSubmit 메서드로 onChange되어 들어간 값 입니다");
        if (value === answer.join('')) { // 정답 구역
            this.setState({
                result: '홈런',
                tries: [...tries, {try: value, result: '홈런!'}],
            })
            alert(`${true}`);
            alert('게임을 다시 시작합니다!');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: []
            });
        } else { // 정답이 아닌 구간
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            console.log(tries)
            if (tries.length >= 9) { // 10번 이상 틀렸을 때
                alert(`10번 넘게 ${false}`);
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}이었습니다.`
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: []
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
                    value: '',
                })
            }
        }
    }


    render() {
        const {result , value, tries} = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1}차 시도:`} tryInfo={v} index={i}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;