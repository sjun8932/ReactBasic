import React from 'react';
import { useState } from "react";
import { useRef } from 'react';

const ResponseCheckHooks = () => {

    const [ state , setState ] = useState('waiting');
    const [ message , setMessage ] = useState('클릭해서 시작하세요');
    const [ result , setResult ] = useState( [] );
    const timeout = useRef( null );
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요');
            timeout.current= setTimeout(() => {
                setState('now');
                setMessage('지금클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready') {
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('너무 성급하게 누루셨어요 😂😂😂, 초록색일 때 쳐 누루라니까')
        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
        }
    };

    const onReset = () => {
        setResult([]);
    }

    const renderAverage = () => {
        return result.length === 0 ? null :
            <>
                <div>평균시간 : {result.reduce( (a,c) => (a + c) / result.length)}ms</div>
                <button onClick={onReset}>리셋</button>
            </>
    }


    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </>
    );
};

export default ResponseCheckHooks;
