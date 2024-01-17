import { useEffect, useState } from "react";
import { ITEMS, shuffleArray } from "../../utils/game-logic";
import GameTile from "../ui/GameTile";


const LeftBoard = () => {
    const [resourceQuantity, setResourceQuantity] = useState(1)
    const [resourceName, setResourceName] = useState('coins')
    const [openTilesIndexes, setOpenTilesIndexes] = useState([])


    const openTile = (e) => {
        const index = Number(e.target.attributes['data-index'].value)
        if (openTilesIndexes.length >= 9 || openTilesIndexes.includes(index)) return
        const updatedIndexes = [...openTilesIndexes, index]
        setOpenTilesIndexes(updatedIndexes)
    }

    useEffect(() => {
        const numberOfTilesOpened = openTilesIndexes.length
        if (numberOfTilesOpened >= 6) {
            setResourceQuantity(3)
            setResourceName('diamond')
        } else if (numberOfTilesOpened >= 3) {
            setResourceQuantity(2)
            setResourceName('emerald')
        }
    }, [openTilesIndexes])

    const resetBoard = () => {
        setOpenTilesIndexes([])
        setResourceQuantity(1)
        setResourceName('coins')
        shuffleArray(ITEMS)
    }

    return (
        <div className='left-board'>
            <h2>Open 3 matching tiles and you win the item!</h2>

            <div className='left-board__game'>
                {ITEMS.map((item, index) =>
                    <GameTile
                        key={item + index}
                        isOpen={openTilesIndexes.includes(index)}
                        index={index}
                        element={item}
                        resourceName={resourceName}
                        resourceQuantity={resourceQuantity}
                        openTile={openTile}/>)}
            </div>

            <div className='left-board__footer'>
                <p>Board will reset in: <span className='left-board__timer'>01:23:54</span> </p>
                <button className='btn btn--primary icon' onClick={resetBoard}>
                    <span className='btn__icon'>
                        <img src={'/images/diamond.png'} alt='diamond resource'/>3
                    </span>
                    <span>Reset Board NOW</span>
                </button>
            </div>
        </div>
    )
}

export default LeftBoard