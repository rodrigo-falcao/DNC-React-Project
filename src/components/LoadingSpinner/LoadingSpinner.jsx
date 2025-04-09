import './LoadingSpinner.css'
import LoadingSpinnerGIF from '../../assets/loading-spinner.gif'

function LoadingSpinner() {
    return (
        <div className='loading-overlay-container d-flex al-center jc-center'>
            <img src={LoadingSpinnerGIF} alt="Imagem de Carregamento" height='80px'/>
        </div>
    )
}

export default LoadingSpinner;