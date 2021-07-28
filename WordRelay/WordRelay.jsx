const React = require('react');
const { useState, useRef} = React;

const WordRelay = () => {
    
    const [word, setWord] = useState('제시어 : 시작');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);
    

    const onSubmitForm = (e) => {
    
        e.preventDefault();
        if(word[word.length-1] === value[0]){
                var element = document.body;
                element.style.backgroundColor = "green";   
                setResult('정답입니다'),
                setWord(value),
                setValue(''), 
                inputRef.current.focus(); 
        } else{
                var element = document.body;
                element.style.backgroundColor = "red";   
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
            <div style={{color:"black", position:"absolute", top:"50%", left:"50%" ,transform: "translate(-50%, -50%)" , textAlign:"center"}}>
                <div style ={{textAlign:"center"}}>{word}</div>
                <form onSubmit = {onSubmitForm} >
                    <label htmlFor="sexy">😂😁😉😘😊끝말잇기 조져부러😎😒🤣😒😂</label>
                    <br></br>
                    <input id="sexy" ref={inputRef} value={value} onChange={onChangeInput} />
                    <button>클릭!</button>
                </form>
                <div><h1>{result}</h1></div>
            </div>
            </>
        );
    }

module.exports = WordRelay;