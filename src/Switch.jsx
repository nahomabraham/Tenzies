import React from "react";

export default function Switch(props){
    return (
        <div className="switch-container">
            <div className="switch-text">NUMS</div>
            <div className="switch" onClick={() => props.setIsNums(isNums => !isNums)}>
                <div className={props.isNums ? "switch-left" : "switch-right"}></div>
            </div>
            <div className="switch-text">DOTS</div>
        </div>
    )
}