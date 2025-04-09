import { useContext } from 'react';
import { Link } from 'react-router-dom';

// ASSETS
import './Footer.css'; 
import Logo from '../../assets/dnc-logo.svg';
import Facebook from '../../assets/facebookIcon.svg';
import Instagram from '../../assets/instagramIcon.svg';
import Twitter from '../../assets/twitterIcon.svg';
import LinkedIn from '../../assets/linkedinIcon.svg';
import BrazilFlag from '../../assets/brazil-flag.svg'
import UsaFlag from '../../assets/usa-flag.svg'

// COMPONENTS
import Button from '../Button/Button'

// CONTEXT
import { AppContext } from '../../contexts/AppContext';

function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <>
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className='footer-logo'/>
                        <p>{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href='https://www.google.com.br' target='_blank'><img src={Facebook} /></a>
                            <a href='https://www.google.com.br' target='_blank'><img src={Instagram} /></a>
                            <a href='https://www.google.com.br' target='_blank'><img src={Twitter} /></a>
                            <a href='https://www.google.com.br' target='_blank'><img src={LinkedIn} /></a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul className='d-flex fd-colum'>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p>R. Justino Cobra, 61 – Vila Ema | 
                                São José dos Campos – SP | 
                                CEP 12243-030 
                            </p>
                            <p>suporte@escoladnc.com.br</p>
                            <p>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between al-center footer-copy'>
                    <p>Copyright © DNC - 2025</p>
                    <div className='langs-area d-flex al-center'>
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('br')}>
                            <img src={BrazilFlag} height='29px' alt="Brazil Flag" />
                        </Button>
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('en')}>
                            <img src={UsaFlag} height='29px' alt="USA Flag" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;