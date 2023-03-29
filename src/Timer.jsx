import React from "react";

export default function Timer(props){
    const [time, setTime] = React.useState(0)
    const [bestTime, setBestTime] = React.useState(
        JSON.parse(localStorage.getItem("best-time")) || "-"
        )
    const [id, setId] = React.useState(0)

    React.useEffect(
        () => {
            if(props.tenzies){
                clearInterval(id)
                setBestTime(prevBestTime => {
                    if (prevBestTime === "-" || time < prevBestTime){
                        localStorage.setItem("best-time", JSON.stringify(time))
                        return time
                    }
                    else {
                        return prevBestTime
                    }
                })
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

    function format(time){
        if (time === "-")
            return time
        return `${Math.floor(time/60)}:${time%60}`
    }
    
    return (
        <div className="timer-container">
            <div className="timer">
                <div className="timer-text">Time</div>
                <div className="timer-time">{format(time)}</div>
            </div>
            <div className="timer">
                <div className="timer-text">Best</div>
                <div className="timer-time">{format(bestTime)}</div>
            </div>
        </div>
    )
}