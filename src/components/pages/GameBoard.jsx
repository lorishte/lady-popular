import LeftBoard from "../layout/LeftBoard";
import RightBoard from "../layout/RightBoard";

const GameBoard = () => {
    return (
        <div className='game-board'>
            <LeftBoard />
            <RightBoard />
        </div>
    )
}

export default GameBoard