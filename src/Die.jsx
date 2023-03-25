import React from "react";

export default function Die(props){

    function dotElements(){
        let dots = []
        for(let i = 0; i < props.value; i++){
            dots.push(<div className="die-dots"></div>)
        }
        return dots
    }


    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="dice" style={styles} onClick={props.holdDice}>
            {dotElements()}
        </div>
    )
}