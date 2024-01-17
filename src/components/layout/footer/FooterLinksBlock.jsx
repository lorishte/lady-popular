
const FooterLinksBlock = (props) => {
    const { name, icon } = props.data

    return (
        <div className='footer__link'>
            <a href='/' className='footer__link--icon'>
                <img src={'/images/social-media-icons/' + icon} alt={icon}/>
            </a>
            <h4 className='footer__link--name'>{name}</h4>
        </div>

    )
}

export default FooterLinksBlock