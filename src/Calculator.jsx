import React, { useState } from 'react'
import Buttons from "./Buttons";
import './App.css'
function Calculator() {
    const [input, setInput] = useState('');
    const [ first ,setFirst]=useState('')
    const [ second ,setSecond]=useState('')
    const clickHandeler = (value) => {
        
        let abc = input + value
        // setInput((prevInput)=>prevInput + value)
        setInput(abc)
        
    }
    const evaluteExpression =()=>{
        try{
            const result = eval(input);
            setInput(result.toString());
        }catch (error){
            setInput('error');
        }
    }
    
   const removeLastElement=()=>{
    let strLength=input.length;
    console.log(strLength)
     const removedString =input.slice(0,-1);
     console.log(removedString)
     setInput(removedString);
   }
//    console.log("asdfg")
    return (
        <div className='calcContainer'>
            <h2>Calculator</h2>
            <input type="text" value={input} />
            <Buttons
                clickHandeler={clickHandeler}
                setInput={setInput}
                evaluteExpression={evaluteExpression}
                removeLastElement={removeLastElement}
            />
        </div>

    )
}

export default Calculator