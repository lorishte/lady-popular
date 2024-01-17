import { GAME_ASSETS } from "../../data/game-assets";

const GameTile = (props) => {
    const { element, index, isOpen, resourceName, resourceQuantity, openTile } = props
    const resourceImage = GAME_ASSETS[resourceName].imageName

    const assetImage = element.imageName
    const assetQuantity = element.quantity

    return (
        <div className={isOpen ? 'game-tile open' : 'game-tile'}
             data-index={index}
             onClick={(e) => openTile(e)}>
            <div className='game-tile__inner'
                 data-index={index}
                 onClick={(e) => openTile(e)}>

                <div className='game-tile__front'
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

                <div className='game-tile__back'>
                    <div className='game-tile open'>
                        <div className='game-tile__asset-image'>
                            <img src={'/images/game-assets/' + assetImage} alt={assetImage}/>
                        </div>
                        <span className='game-tile__asset-quantity'>{assetQuantity}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GameTile