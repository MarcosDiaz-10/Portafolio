import './Skills.css'
import imgJs from '../assets/icons8-javascript-logo-500.png'
import imgHtml from '../assets/icons8-html-5-500.png'
import imgCss from '../assets/icons8-css3-500.png'
import imgReact from '../assets/icons8-react-a-javascript-library-for-building-user-interfaces-96.png'
import imgNode from '../assets/icons8-nodo-js-500.png'
export const Skills = () => {
  return (
    <section className="skills">
      <h1>Habilidades</h1>
      <div className='imgs'> 
        <div>
          <img id='javascript-img' src={imgJs} alt="Javascript" />
          <span>Javascript</span>
        </div>
        <div>
          <img id='html-img' src={imgHtml} alt="Html" />
          <span>Html</span>
        </div>
        <div className='css-img-container'>
          <img id='css-img' src={imgCss} alt="Css" />
          <span>Css</span>

        </div>
        <div>
          <img id='react-img' src={imgReact} alt="React" />
          <span>React</span>
        </div>
        <div>
          <img id='Node-img' src={imgNode} alt="Node" />
          <span>Node</span>
        </div>
      </div>
    </section>
  )
}
