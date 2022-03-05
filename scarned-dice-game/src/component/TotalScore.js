import React from "react";

function TotalScore(props) {
    const {playerOneTotal,playerTwoTotal}=props
    return (<>
        <div className="total-parent-score">
            <div className="player-one-score"><p>Player 1's score <br />{playerOneTotal}</p></div>
            <div className="player-two-score"><p>Player 2's score <br />{playerTwoTotal}</p></div>
        </div>
    </>);
}

export default TotalScore;
