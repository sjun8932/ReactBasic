import React from 'react';
import {useReducer} from "react";
import Table from './Table';

const initialState =  {
    winner: '',
    turn: '0',
    tableDate: [['','',''],['','',''],['','','']],
};

const reducer = (state, action) => {

}

const TicTacToe = () =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Table />
            {winner && <div>{winner 님의 승리}</div>}
        </>
    );
}

export default TicTacToe;