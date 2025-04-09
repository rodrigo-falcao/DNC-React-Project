import React from 'react'

// COMPONENTS
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import ProjectsList from '../components/ProjectsList/ProjectsList'

function Home() {
    return (
        <>
        <div>
            <Header />
            <Hero />
            <ProjectsList />
            <Footer />
        </div>
        </>
    )
}

export default Home