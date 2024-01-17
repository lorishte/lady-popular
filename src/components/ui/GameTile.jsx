import { GAME_ASSETS } from "../../data/game-assets";

const GameTile = (props) => {
    const { element, index, isOpen, resourceName, resourceQuantity, openTile } = props
    const resourceImage = GAME_ASSETS[resourceName].imageName

    if (isOpen) {
        const assetImage = element.imageName
        const assetQuantity = element.quantity

        return (
            <div className='game-tile open'>
                <div className='game-tile__asset-image'>
                    <img src={'/images/game-assets/' + assetImage} alt={assetImage}/>
                </div>
                <span className='game-tile__asset-quantity'>{assetQuantity}</span>
            </div>
        )
    }


    return (
        <div className='game-tile'
             data-index={index}
             onClick={(e) => openTile(e)}>
            <div className='game-tile__resource-image'
                 data-index={index}
                 onClick={(e) => openTile(e)}>
                <img src={'/images/' + resourceImage}
                     alt={resourceImage}
                     data-index={index}
                     onClick={(e) => openTile(e)}/>
            </div>
            <div className='game-tile__resource-quantity' data-index={index}
                 onClick={(e) => openTile(e)}>{resourceQuantity}</div>
        </div>
    )
}

export default GameTile