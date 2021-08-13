
import React from 'react';
import { memo } from 'react';
import { useState } from "react";

const Try = memo ( ({ tryInfo }) => {
    // tryInfo.try = 'hello' => 부모로 받은 props의 경우 자식이 직접 바꾸면 안좋다. 왜? 부모에게도 영향을 미치니까
    // 그런데 실무에서는 불가피하게 바꾸어야 할 경우가 있다.
    // 그럴 때에는 props를 state로 만들어주고 그 state를 변경해준다
    const [result, setResult] = useState( tryInfo.result );

    const onClick = () => {
        setResult('부모로 받은 props 변경 🤣🤣');
    };

    return (
        <li>
            <div>{tryInfo.try}</div>
            <div onClick = {onClick}>{result}</div>
        </li>
    );
});

export default Try;

// import {PureComponent} from "react";
//
// class Try extends PureComponent {
//     render(){
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         );
//     }
// }

