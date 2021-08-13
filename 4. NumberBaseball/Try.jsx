
import React  from 'react';
import { memo } from 'react';

const Try = memo ( ({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
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

