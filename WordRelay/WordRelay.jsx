const React = require('react');
const { useState, useRef} = React;

const WordRelay = () => {
    
    const [word, setWord] = useState('시작');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);
    

    const onSubmitForm = (e) => {
    
        e.preventDefault();
        if(word[word.length-1] === value[0]){
                setResult('정답입니다'),
                setWord(value),
                setValue(''), 
                inputRef.current.focus(); 
        } else{
                setResult('틀렸습니다'),
                setValue(''),
                inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };
    
        return (
            <>
            <div>
                <div>{word}</div>
                <form onSubmit = {onSubmitForm} >
                    <label htmlFor="sexy">끝말잇기</label>
                    <input id="sexy" ref={inputRef} value={value} onChange={onChangeInput} />
                    <button>클릭!</button>
                </form>
                <div><h1>{result}</h1></div>
            </div>
            </>
        );
    }

module.exports = WordRelay;