
const Header = () => {
    return (
        <div className='header'>

            <div className='user'>
                <div className='avatar'>
                    <img src='/images/avatar.png' alt='avatar'/>
                    <div className='avatar__name'>Milla</div>
                </div>

                <ul className='user-resources'>
                    <li className='list-item'>
                        <div className='list-item__icon'>
                            <img src='images/coins.png' alt='coins'/>
                        </div>
                        <div className='list-item__quantity'>
                            4.68 m
                        </div>
                    </li>
                    <li className='list-item'>
                        <div className='list-item__icon'>
                            <img src='images/emerald.png' alt='emeralds'/>
                        </div>
                        <div className='list-item__quantity'>
                            430
                        </div>
                    </li>
                    <li className='list-item'>
                        <div className='list-item__icon'>
                            <img src='images/diamond.png' alt='diamonds'/>
                        </div>
                        <div className='list-item__quantity'>
                            232
                        </div>
                    </li>
                </ul>
            </div>


            <div className='header__menu'>

                <ul className='user-options'>
                    <li className='list-item'>
                        <div className='list-item__icon'>
                            <img src='images/cup.png' alt='cup'/>
                        </div>
                    </li>
                    <li className='list-item'>
                        <div className='list-item__icon'>
                            <img src='images/bag.png' alt='bag'/>
                        </div>
                    </li>
                    <li className='list-item'>
                        <div className='list-item__icon'>
                            <img src='images/house.png' alt='cup'/>
                        </div>
                    </li>
                </ul>

                <ul className='user-power'>
                    <li className='list-item'>
                        <div className='list-item__icon'>
                            <img src='images/power_yellow.png' alt='power'/>
                        </div>
                        <div className='list-item__quantity'>
                            8
                        </div>
                    </li>
                    <li className='list-item'>
                        <div className='list-item__icon'>
                            <img src='images/power_green.png' alt='power'/>
                        </div>
                        <div className='list-item__quantity'>
                            17
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header