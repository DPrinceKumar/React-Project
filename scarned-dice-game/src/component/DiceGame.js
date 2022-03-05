import React,{useState} from "react";
import DicePlay from "./DicePlay";
import TotalScore from "./TotalScore";

const DiceGame = ({ title }) => {
    const [playerOneTotal, setPlayerOneTotal] = useState(0);
    const [playerTwoTotal, setPlayerTwoTotal] = useState(0)

    return (<>
        <div className="dice-game-title">
            <h1>{title}</h1>
            <DicePlay playerOneTotal={playerOneTotal} setPlayerOneTotal={setPlayerOneTotal} playerTwoTotal={playerTwoTotal} setPlayerTwoTotal={setPlayerTwoTotal} />
            <TotalScore playerOneTotal={playerOneTotal} playerTwoTotal={playerTwoTotal} />
        </div>
    </>);
};

export default DiceGame;