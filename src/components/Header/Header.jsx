import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

// ASSETS
import './Header.css';
import logo from '../../assets/dnc-logo.svg';
import BrazilFlag from '../../assets/brazil-flag.svg'
import UsaFlag from '../../assets/usa-flag.svg'

// COMPONENTS
import Button from '../Button/Button';

// CONTEXT
import { AppContext } from '../../contexts/AppContext';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <header>
            <div className='container'>     
                <div className='al-center d-flex jc-space-between'>  
                    <Link to="/"><img src={logo} /></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toogleMenu}>
                            Menu
                        </Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toogleMenu}>
                            X
                        </Button>
                        <ul className='d-flex'>
                            <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                            <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                            <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                            <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                        </ul>
                        <div className='langs-area d-flex al-center'>
                            <Button buttonStyle='unstyled' onClick={() => { changeLanguage('br'); setIsOpen(false);}}>
                                <img src={BrazilFlag} height='29px' alt="Brazil Flag" />
                            </Button>
                            <Button buttonStyle='unstyled' onClick={() => { changeLanguage('en'); setIsOpen(false);}}>
                                <img src={UsaFlag} height='29px' alt="USA Flag" />
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;