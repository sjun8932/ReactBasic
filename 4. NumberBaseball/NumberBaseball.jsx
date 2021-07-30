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
                    {['시은','수민','아이사','세은','윤','재이'].map( (v) => {
                        return(<li>{v}</li>);
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;