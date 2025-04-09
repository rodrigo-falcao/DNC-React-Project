import { useEffect, useState, useContext } from 'react';
// STYLES
import './ContactForm.css';

// COMPONENTS
import Button from '../Button/Button'

// CONTEXT
import { AppContext } from '../../contexts/AppContext';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isFormValid, setIsFormValid] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isFormValid) {
            setFormSubmitLoading(true)
            try {
                // Simulação de envio do formulário.
                await new Promise((resolve) => setTimeout(resolve, 1500));
                setFormSubmitted(true);

                // ** Requisição comentada para fins de estudo. **
                // const response = await fetch('https://api.web3forms.com/submit', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON. stringify({...formData, access_key: 'xxxXXxxx'})
                // }) 

                // if (response.ok) {
                //     setFormSubmitted(true)
                // } else {
                //     alert('Erro ao enviar!')
                // }
            } catch (e) {
                alert('Erro:', e)
            }finally {
                setFormSubmitLoading(false);
            }
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email)
        }

        const isValid = formData.name.trim() && 
        formData.email.trim() && 
        isValidEmail(formData.email) && 
        formData.message.trim()

        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const appContext = useContext(AppContext)

    return (
        <div className='container'>
            <div className='contact-form d-flex al-center jc-center fd-colum'>
                <h2>{appContext.languages[appContext.language].contact.title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex form-group">
                        <input 
                        type="text" 
                        className='form-input' 
                        id='name' 
                        name='name'
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        onChange={handleChange}
                        />
                        <input 
                        type="email" 
                        className='form-input' 
                        id='email' 
                        name='email'
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="d-flex form-group">
                        <textarea 
                        className='form-input'
                        id='message'
                        name="message" 
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        onChange={handleChange}
                        rows='4'
                        ></textarea>
                    </div>
                    <div className='al-center d-flex jc-end form-group'>
                        {formSubmitted && <p>{appContext.languages[appContext.language].contact.successMsg}</p>}
                        <Button type='submit' buttonStyle='secondary' disabled={!isFormValid || formSubmitLoading}>
                            {appContext.languages[appContext.language].general.send}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;