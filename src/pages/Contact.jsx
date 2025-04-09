import { useContext } from 'react';

// COMPONENTS
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";

// CONTEXT
import { AppContext } from '../contexts/AppContext';

function Contact() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.contact} image='bg-contact.svg' />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact