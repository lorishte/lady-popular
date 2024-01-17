import { FOOTER_INFO } from "../../../data/footer-info";
import FooterLinksBlock from "./FooterLinksBlock";

const Footer = () => {
    return (
        <div className='footer'>
            {FOOTER_INFO.map(el => <FooterLinksBlock data={el} key={el.name}/>)}
        </div>
    )
}

export default Footer