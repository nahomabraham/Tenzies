import React from "react";

export default function Timer(props){
    const [time, setTime] = React.useState({
        min: 0,
        sec: 0
    })
    const [id, setId] = React.useState(0)

    React.useEffect(
        () => {
            if(props.tenzies){
                clearInterval(id)
            }
            else{
                setId(setInterval(setCurrentTime, 1000))
                setTime({
                    min: 0,
                    sec: 0
                })
            }
            

        }, [props.tenzies]
    )




    function setCurrentTime(){
        setTime(time => time.sec < 59 ? 
            {...time, sec: time.sec+1} : 
            {min: time.min+1, sec: 0}
        )
    }

    
    return (
        <div className="timer">
            <div className="timer-text">Time </div>
            <div className="timer-time">{time.min}:{time.sec}</div>
        </div>
    )
}