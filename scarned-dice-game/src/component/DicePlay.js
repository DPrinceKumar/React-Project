import React, { useState, useEffect } from "react";
// import {img} from "./DiceImg"
import dice1 from "../images/dic1.PNG";
import dice2 from "../images/dic2.PNG";
import dice3 from "../images/dic3.PNG";
import dice4 from "../images/dic4.PNG";
import dice5 from "../images/dic5.PNG";
import dice6 from "../images/dic6.PNG";

function DicePlay(props) {
    const [currentRoll, setCurrentRoll] = useState(1);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(false);

    const { playerOneTotal, setPlayerOneTotal, playerTwoTotal, setPlayerTwoTotal } = props;

    useEffect(() => {
        updateCurrentScore();
    }, [currentRoll]);

    const updateCurrentScore = () => {
        if (currentRoll === 1) {
            setCurrentScore(0);
            setCurrentPlayer(!currentPlayer);
        }
        else {
            setCurrentScore(currentScore + currentRoll);
        }
    }
    // {/* ============================Player turn to play =====================*/}
    const getPlayerTurn = () => {
        let player = currentPlayer ? '1' : '2';
        return <h2 id="dice-current-player-turn">Player {player}'s Turn:</h2>
    }

    // {/* ============================Dice roll =====================*/ }
    const getCurrentRoll = () => {
        let diceObj = {
            1: dice1,
            2: dice2,
            3: dice3,
            4: dice4,
            5: dice5,
            6: dice6,
        }
        if (currentRoll) {
            return (
                <img id="dice-current-dice-face" src={diceObj[currentRoll]} alt="dice" />
            )
        }
    }

    // {/* ============================Dice roll =====================*/ }
    //0-1 * 10 = 0-10 % 6 => (0-5) +1 = 1-6

    const updateCurrentRoll = () => {
        let out = 1 + (Math.round(Math.random() * 10) % 6);
        setCurrentRoll(out);
    }
    const passTheDice = () => {
        let player = currentPlayer ? '1' : '2';
        if (currentPlayer) {
            setPlayerOneTotal(playerOneTotal + currentScore);
            if (playerOneTotal + currentScore >= 20) {
                setPlayerOneTotal(0);
                setPlayerTwoTotal(0);
                setCurrentPlayer(true);
                alert("Player " + player + " Wins");
            }
        }
        else {
            setPlayerTwoTotal(playerTwoTotal + currentScore);
            if (playerTwoTotal + currentScore >= 20) {
                setPlayerOneTotal(0);
                setPlayerTwoTotal(0);
                setCurrentPlayer(false);
                alert("Player " + player + " Wins")
            }
        }
        setCurrentRoll(1);
    }

    const getRollCTA = () => {
        return <button className="dice-current-btn dice-current-primary" onClick={updateCurrentRoll}>Roll</button>
    }

    const getPassCTA = () => {
        return <button className="dice-current-btn" onClick={passTheDice}>Pass</button>
    }

    const getDiceCurrentCTAs = () => {
        return (
            <div className="dice-current-CTAs-wrapper">
                {getRollCTA()}
                {getPassCTA()}
            </div>
        )
    }


    const getCurrentScore = () => {
        return <div className="dice-current-score">CURRENT SCORE : {currentScore}</div>
    }

    return (<>
        {getPlayerTurn()}
        {getCurrentRoll()}
        {getDiceCurrentCTAs()}
        {getCurrentScore()}
    </>);
}

export default DicePlay;
