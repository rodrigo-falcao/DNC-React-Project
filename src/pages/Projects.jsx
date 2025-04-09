import { useContext } from 'react';

// COMPONENTS
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import ProjectsList from '../components/ProjectsList/ProjectsList'

// CONTEXT
import { AppContext } from '../contexts/AppContext';

function Projects() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image='./bg-projects.svg' />
            <ProjectsList />
            <Footer />
        </>
    )
}

export default Projects