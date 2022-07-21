import React, { useState, useEffect, useRef } from 'react'

function Timer(){
    const [min, setMin] = useState(5);
    const [sec, setSec] = useState(0);

    useEffect(() => {
       const interval = setInterval(() => {
            updateTimer()
        }, 1000);
        return () => clearInterval(interval)
        }
    , [min, sec]);
     

    function updateTimer(){
        if (sec === 0){
            setSec(59);
            setMin(min-1);
        }else{
            setSec(sec-1);
        }


    }
    if(sec < 10){
        return(
        
            <div>
                <h1 style={{color:"white"}}>{min} :0{sec}</h1>
            </div>
    
        )

    }else{
        return(
            <div>
                <h1 style={{color:"white"}}>{min}:{sec}</h1>
            </div>
        )

    }
        
    
    
}

export default Timer;