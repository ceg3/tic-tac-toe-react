
import './Board.css';
import Square from '../Square/Square.jsx'
import React, {useState} from 'react';

// The component contains the main game logic
function Board() {

    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(true);

    // handleClickEvent is used by Squares Component to update state in Board 
    // component
    const handleClickEvent = (i)=>{
        const newSquares = [...squares]
        // check if game already won or square already filled and do
        // not allow an update
        const winnerDeclared = Boolean(calculateWinner(newSquares));
        const squareFilled = Boolean(newSquares[i]);
        if(winnerDeclared || squareFilled) {
            return;
        }

        newSquares[i] = xIsNext ? "X" : "O";
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    // Check if there is a winner
    let status;
    const winner = calculateWinner(squares);
    if(winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    return (
        <div className="Board">
            <div className="status">{status}</div>
            <div className='board-row'>
                <Square value={squares[0]} onClickEvent={() => handleClickEvent(0)}/>
                <Square value={squares[1]} onClickEvent={() => handleClickEvent(1)}/>
                <Square value={squares[2]} onClickEvent={() => handleClickEvent(2)}/>
            </div>
            <div className='board-row'>
                <Square value={squares[3]}  onClickEvent={() => handleClickEvent(3)}/>
                <Square value={squares[4]}  onClickEvent={() => handleClickEvent(4)}/>
                <Square value={squares[5]}  onClickEvent={() => handleClickEvent(5)}/>
            </div>
            <div className='board-row'>
                <Square value={squares[6]}  onClickEvent={() => handleClickEvent(6)}/>
                <Square value={squares[7]}  onClickEvent={() => handleClickEvent(7)}/>
                <Square value={squares[8]}  onClickEvent={() => handleClickEvent(8)}/>
            </div>
        </div>);
}

// Helper function to check for a winner yet
function calculateWinner(squares) {

    const lines = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]];

    for(let line of lines){
        const [a, b, c] = line;
        if(squares[a] && squares[a]===squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;