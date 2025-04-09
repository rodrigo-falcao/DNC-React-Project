import { useContext } from 'react';

// ASSETS
import './AboutText.css';

// CONTEXT
import { AppContext } from '../../contexts/AppContext';

function AboutText() {
    const appContext = useContext(AppContext)
    return (
        <div className="container">
            <div className="text-section d-flex jc-center fd-column">
                <div className="text-section-text">
                    <h2>{appContext.languages[appContext.language].about.title}</h2>
                </div>
                <div className="text-section-text">
                    <p>{appContext.languages[appContext.language].about.p1}
                    </p>
                    <p>{appContext.languages[appContext.language].about.p2}</p>
                    <p>{appContext.languages[appContext.language].about.p3}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutText;