import React, {Component} from 'react'; // 1. import React from 'react' + 2. import {Component} from 'react';
import Try from './Try';

function getNumbers () {

}

class NumberBaseball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            value: '',
            answer: getNumbers(),
            tries: [],
        }
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }


    onSubmitForm (e) {

    };
    
    onChangeInput (e)  {

    };

    StayC = [
        {member : '시은' , feature: '메인보컬'},
        {member : '수민' , feature: '리더, 래퍼, 서브보컬'},
        {member : '세은' , feature: '서브보컬'},
        {member : '윤' , feature: '리드보컬'},
        {member : '재이' , feature: '랩, 서브보컬'},
        {member : '아이사' , feature: '리드보컬'}
    ]

    render () {
        return (
            < >
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {
                        this.StayC.map( (v,i) => {
                        return(<Try key={v.member + v.feature} value={v} index={i}/>);
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;