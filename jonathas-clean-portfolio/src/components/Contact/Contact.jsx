import { contact } from '../../portfolio'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import './Contact.css'

const Contact = () => {
  const [{ themeName }] = useContext(ThemeContext)

  const handleEmailClick = () => {  
    window.location.href = 'mailto:calderonjonathas@gmail.com'
  }

  return (
    <section className={`section contact ${themeName}`} id='contact'>
      <h2 className='section__title'>Contact</h2>
      
      <div className='contact__container'>
        <div className='contact__info-card'>
          <h3 className='contact__info-title'>Get in Touch</h3>
          <p className='contact__info-text'>
            Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
          </p>
          
          <div className='contact__info-item'>
            <EmailIcon className="contact__icon" />
            <a href={`mailto:${contact.email}`} className='contact__link'>
              {contact.email}
            </a>
          </div>
          
          {contact.phone && (
            <div className='contact__info-item'>
              <PhoneIcon className="contact__icon" />
              <a href={`tel:${contact.phone}`} className='contact__link'>
                {contact.phone}
              </a>
            </div>
          )}
          
          {contact.location && (
            <div className='contact__info-item'>
              <LocationOnIcon className="contact__icon" />
              <span>{contact.location}</span>
            </div>
          )}
          
          <div className='contact__social'>
            {contact.social?.linkedin && (
              <a 
                href={contact.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className='contact__social-link'
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            )}
            
            {contact.social?.github && (
              <a 
                href={contact.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className='contact__social-link'
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            )}
          </div>
        </div>
        
        <div className='contact__form-card'>
          <h3 className='contact__form-title'>Send a Message</h3>
          
          <div className='contact__button-container'>
            <button 
              className='contact__button'
              onClick={handleEmailClick}
            >
              <EmailIcon />
              <span>Email Me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
