import './Projects.css'
import imgAlmuerzi from '../assets/Captura de almuerzi.png'
import imgCalendar from '../assets/Captura de Calendar.png'
import imgComics from '../assets/Captura de info comics.png'
import imgJournal from '../assets/Captura de journalApp.png'

export const Projects = () => {
  return (
    <section className="projects">
        <div className='project-title'>
          <h1>Projectos</h1>
        </div>
        <div className='view-projects'>
          <div className='card-projects'>
              <div className='card-content'>
                <a href="https://almuerziprojectmarcos.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={ imgAlmuerzi } alt="almuerzi" />
                  <div className='card-text'>
                    <h2>Almuerzi</h2>
                    <span>
                      Es un servicio que permite a los usuarios seleccionar y ordenar platos, la aplicación muestra el menú a través de una interfaz digital, Los usuarios pueden elegir la comida que desean, agregarla al carrito, confirmar el pedido y esperar a que llegue a su domicilio. 
                    </span>
                  </div>
                </a>
              </div>
              
          </div>
          <div className='card-projects'>
              <div className='card-content'> 
                <a href="https://calendarappmarcosprueba.netlify.app" target="_blank" rel="noopener noreferrer">
                  <img src={ imgCalendar } alt="Calendar" />
                  <div className='card-text'>
                    <h2>Calendar</h2>
                    <span>
                    Esta aplicación de calendario le ofrece la posibilidad de crear eventos, modificarlos y eliminarlos de forma fácil y rápida. Así podrá organizar su agenda personal y profesional con eficiencia y aprovechar al máximo su tiempo. Puede añadir detalles a cada evento, como el lugar, la hora, los invitados y las notas.
                    </span>
                  </div>
                </a>
              </div>
          </div>
          <div className='card-projects'>
              <div className='card-content'>
                <a href="https://heroesapp-marcos10.netlify.app" target='_blank' rel="noopener noreferrer">
                  <img src={ imgComics } alt="Comics" />
                    <div className='card-text'>
                      <h2>Comics</h2>
                      <span>
                      La aplicacion que hemos desarrollado es una herramienta util y divertida para los aficionados a los comics. Con solo introducir el nombre de un personaje de comic, la aplicacion muestra una ficha detallada con su informacion basica, como su nombre real, su primera aparicion y sus enemigos.
                      </span>
                    </div>
                  </a>
              </div>
          </div>
          <div className='card-projects'>
              <div className='card-content'>
                <a href="https://journalapp-marcos.netlify.app" target="_blank" rel="noopener noreferrer">
                <img src={ imgJournal } alt="Journal" />
                    <div className='card-text'>
                      <h2>Journal</h2>
                      <span>
                      Esta aplicación es una herramienta para plasmar tu vida en palabras e imágenes. Te ayuda a crear un registro personal de tus emociones, vivencias, aprendizajes y sueños. Es como tener un amigo íntimo que siempre te escucha y te acompaña.  
                      </span>
                    </div>
                  </a>
              </div>
          </div>
        </div>
    </section>
  )
}
