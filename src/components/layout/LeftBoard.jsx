import { useEffect, useState } from "react";
import { ITEMS, shuffleArray } from "../../utils/game-logic";
import GameTile from "../ui/GameTile";


const LeftBoard = () => {
    const [resourceQuantity, setResourceQuantity] = useState(1)
    const [resourceName, setResourceName] = useState('coins')
    const [openTilesIndexes, setOpenTilesIndexes] = useState([])
    const [currentRoundNumber, setCurrentRoundNumber] = useState(1)

    const NUMBER_OF_ROUNDS = 6
    const resetIsAllowed = currentRoundNumber === NUMBER_OF_ROUNDS || openTilesIndexes.length < 9


    const openTile = (e) => {
        const dataIndex = e.target.attributes['data-index']

        if (!dataIndex) return

        const index = Number(dataIndex.value)

        if (openTilesIndexes.length >= 9 || openTilesIndexes.includes(index)) return

        const updatedIndexes = [...openTilesIndexes, index]
        setOpenTilesIndexes(updatedIndexes)
    }

    useEffect(() => {
        const numberOfTilesOpened = openTilesIndexes.length
        if (numberOfTilesOpened >= 6) {
            changeResources('diamond', 3)
        } else if (numberOfTilesOpened >= 3) {
            changeResources('emerald', 2)
        }
    }, [openTilesIndexes])

    const changeResources = (type, quantity) => {
        setTimeout(() => {
            setResourceQuantity(quantity)
            setResourceName(type)
        }, 500)
    }

    const resetBoard = () => {
        if (resetIsAllowed) return

        setOpenTilesIndexes([])
        setResourceQuantity(1)
        setResourceName('coins')
        setCurrentRoundNumber(currentRoundNumber + 1)
        shuffleArray(ITEMS)
    }

    const rounds = []
    for (let i = 1; i <= NUMBER_OF_ROUNDS; i++) {
        const isActive = i === currentRoundNumber
        rounds.push(<div className={isActive ? 'round-icon active' : 'round-icon'}/>)
    }


    return (
        <div className='left-board'>
            <h2>Open 3 matching tiles and you win the item!</h2>

            <div className='rounds'>
                {rounds}
            </div>

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
                <p>Board will reset in: <span className='left-board__timer'>01:23:54</span></p>
                <button className='btn btn--primary icon' onClick={resetBoard} disabled={resetIsAllowed}>
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