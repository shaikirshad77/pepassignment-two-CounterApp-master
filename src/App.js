import React, { useState } from 'react';
import { Button, Label } from 'semantic-ui-react';
import "./Components/CounterSemanticUI.css"

function Counter() {
    const [count, setCount] = useState(0);    
    const [buttonClass, setButtonClass] = useState("primary");

    const DecrementFn = () =>{
        if(count <= 0){
            setCount(0)
            setButtonClass("secondary")   
        }
        else{
            setCount(count - 1)
            setButtonClass("primary")  
        }
    }

    // Increment Function
    const IncrementFn = () =>{
        setCount(count + 1)
        setButtonClass("primary")  
    }

    let socialcount = 0;
    const social = () =>{
        if(socialcount % 5 === 0 || socialcount === 0){
            window.open('_blank');
            setTimeout(() => {
                window.open('_blank');
            }, 2000);
        }
        socialcount +=1;
    }
    console.clear()

  return (
    <div className='main'>
        <h4>A Counter Application Using useState()</h4>
        <div className='Card'>
            <Label className='Count'size="huge">Count </Label>
            <Label className='CountNumber'size="huge">{count}</Label>
            <Button.Group>
                <Button className="increment" onClick={IncrementFn}> Increment </Button>
                <Button className={buttonClass} onClick={DecrementFn}>Decrement </Button>
            </Button.Group>
        </div>
        <p onMouseOver={social} className='credit'> <span>  </span></p>
    </div>
  );    
}

export default Counter;