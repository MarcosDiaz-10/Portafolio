import imgGithub from '../assets/icons8-github-512.png'
import imgLinkedin from '../assets/icons8-linkedin-500.png'
import imgGmail from '../assets/icons8-gmail-500.png'
import imgNumber from '../assets/icons8-contacts-500.png'

import './ContactMe.css'


export const ContactMe = () => {
  return (
    <section className="contact-me">
      <h1>Contactame</h1>
      <div className='imgs-contac-me'> 
        <a href="https://github.com/MarcosDiaz-10" target="_blank" rel="noopener noreferrer">
          <img id='github-img' src={imgGithub} alt="Javascript" />
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/marcosdiaz10/" target="_blank" rel="noopener noreferrer">
          <img id='likedin-img' src={imgLinkedin} alt="Html" />
          <span>Linkedin</span>
        </a>
        <div>
          <img id='gmail-img' src={imgGmail} alt="React" />
          <span>diazelhalabimarcosa@gmail.com</span>
        </div>
        <div>
          <img id='number-img' src={imgNumber} alt="Node" />
          <span>+58 4242819364</span>
        </div>
      </div>
    </section>
  )
}
