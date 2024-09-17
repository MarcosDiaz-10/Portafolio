import './Home.css'
import img from '../assets/Foto_CV_2-removebg-preview.png'


export const Home = () => {
    return (
            <section className='home'>
                
                <div className='content'>
                    <div className='text-main'>
                        <span>Hola, soy<br /></span>
                        <h1><strong>Programador Web Full Stack</strong></h1>
                        <span id='short-description'>Soy Marcos Díaz, Programador web full stack y estudiante de computación de la Universidad central de venezuela. Bienvenido a mi portafolio!!!</span>
                    </div>
                    <div className='img-me'>
                        <img src={img} alt="Yo" />
                    </div>
                </div>
            </section>

    )
}
