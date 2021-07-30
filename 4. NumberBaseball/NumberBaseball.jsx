import React, {Component} from 'react'; // 1. import React from 'react' + 2. import {Component} from 'react';

function getNumbers () {

};

class NumberBaseball extends Component {
    
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }

    onSubmitForm = () => {

    };
    
    onChangeInput = () => {
    
    };

    render () {
        return (
            < >
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {[
                        {member : '시은' , feature: '메인보컬'},
                        {member : '수민' , feature: '리더, 래퍼, 서브보컬'},
                        {member : '세은' , feature: '서브보컬'},
                        {member : '윤' , feature: '리드보컬'},
                        {member : '재이' , feature: '랩, 서브보컬'},
                        {member : '아이사' , feature: '리드보컬'}
                    ].map( (v,i) => {
                        return(<li key={v.member + v.feature}><b style={{color:"#98FF98"}}>"{v.member}"</b>은 {v.feature} {i}번</li>);
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;