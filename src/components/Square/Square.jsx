import './Square.css';

// implements on the 9 squares on the board
function Square(props) {
return (
    <button className="Square" onClick={props.onClickEvent}>
        {props.value}
    </button>);
}

export default Square;