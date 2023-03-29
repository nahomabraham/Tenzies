import React from "react";

export default function Timer(props){
    const [time, setTime] = React.useState(0)
    const [id, setId] = React.useState(0)

    React.useEffect(
        () => {
            if(props.tenzies){
                clearInterval(id)
            }
            else{
                setId(setInterval(setCurrentTime, 1000))
                setTime(0)
            }
            

        }, [props.tenzies]
    )




    function setCurrentTime(){
        setTime(time => time+1)
    }

    function formatTime(){
        return `${Math.floor(time/60)}:${time%60}`
    }
    
    return (
        <div className="timer">
            <div className="timer-text">Time </div>
            <div className="timer-time">{formatTime()}</div>
        </div>
    )
}