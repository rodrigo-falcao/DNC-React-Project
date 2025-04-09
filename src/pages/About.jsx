import { useContext } from 'react';

// COMPONENTS
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import AboutText from '../components/AboutText/AboutText';
import Footer from '../components/Footer/Footer';

// CONTEXT
import { AppContext } from '../contexts/AppContext';


function About() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.about} image='bg-about.svg' />
            <AboutText />
            <Footer />
        </>
    );
}

export default About