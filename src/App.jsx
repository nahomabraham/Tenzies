import React from "react"
import Die from "./Die"
import Switch from "./Switch"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App(){
    const [dice, setDice] = React.useState(newDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSame = dice.every(die => die.value === firstValue)
        if (allHeld && allSame){
            setTenzies(true)
        }
    }, [dice])

    function newDie(){
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function newDice(){
        const diceArray = [];

        for(let i = 0; i < 10; i++){
            diceArray.push(newDie())
        }
        return diceArray
    }

    function rollDice(){
        if (tenzies){
            setTenzies(false)
            setDice(newDice())
        }
        else{
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ?
            die : newDie()
        }))
    }
    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
            {...die, isHeld: !die.isHeld} : die
        }))
    }

    const dieElements = dice.map(die  => 
        <Die 
            key={die.id}
            value={die.value} 
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    )
    

    return (
        <main>
            {tenzies && <Confetti/>}
            <header>
                <h1 className="title">Tenzies</h1>
                <Switch />
            </header>
            <div className="instruction">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
            <div className="dice-container">
                {dieElements}
            </div>
            <button className="roll-button" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}