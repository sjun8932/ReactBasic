import React, { useState } from 'react'; // 1. import React from 'react' + 2. import {Component} from 'react';
import Try from './Try';

const getNumbers = () => { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {

    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers()); // ex: [1,3,5,7]
    const [correction, setCorrection] = useState('정답!!! 🤣🤣🤣🤣🤣');
    const [tries, setTries] = useState([]);

    const onChangeInput = (e) => {
        setValue(e.target.value); // input html 태그의 onChange 에서 보내진 값을 담당
    };

    const onSubmitForm = (e) =>  {
        e.preventDefault();

        console.log(`정답은 ${answer.join('')}`) // ${ } 안에 getNumbers()를 넣어서 확인하면 초기 answer값이 아니라 단순히 getNumbers 함수가 반복되어 새로운 값이 생성되는 거라 정답을 의미하지 않는다.

        if (value === answer.join('')) { // 정답 구역
            setResult('홈런');
            setTries( (prevTries) => {return [...prevTries, {try: value, result: '홈런!'}]})
            alert(`${correction}`);
            alert('게임을 다시 시작합니다!');
        } else {

            // 정답이 아닌 구간

            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;

            if (tries.length >= 9) {
                // 10번 이상 틀렸을 때

                alert(`10번 넘게 ${setCorrection('틀렸어!!!!')}`);

                setResult( `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}이었습니다.`);
                alert('게임을 다시 시작합니다!');

                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}]);
                setValue('');
            }
        }
    }


    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시행횟수: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try key={`${i + 1}차 시도: ${v.try}`} tryInfo={v} />
                    );
                })}
            </ul>
        </>
    );
}

export default NumberBaseball;