import './AboutMe.css'
import img from '../assets/FotoCV3-removebg-preview.png'


export const AboutMe = () => {
  return (
      
      <section className="about-me">
        <div className='about-img-me'>
          <img src={img} alt="Yo" />
        </div>
        <div className='about-me-text'>
          <h1>Sobre Mi</h1>
          <p>Estoy encantado de compartir con ustedes mi pasión por la programación y el desarrollo web. Desde que era pequeño, me fascinaba todo lo que tenía que ver con crear páginas y aplicaciones en internet. Por eso, me dediqué a estudiar y practicar mucho en este campo, hasta conseguir un trabajo en una empresa donde pude demostrar mis habilidades. Me encanta estar al día de las últimas novedades tecnológicas y aprender cosas nuevas cada día. La programación es mi forma de expresarme y de contribuir al mundo</p>
        </div>
      </section>


  )
}
