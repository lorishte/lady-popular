const AssetTile = (props) => {
    const { id, name, image, price, collected } = props.asset

    return (
        <div className={collected ? 'asset-tile collected' : 'asset-tile'}>
            <div className='asset-tile__image'>
                <img src={'/images/game-assets/' + image} alt={image}/>
            </div>

            {collected
                ? <div className='asset-tile__checkmark'>&#10003;</div>
                : <div className='asset-tile__price'>$ {price}</div>}
        </div>
    )
}

export default AssetTile