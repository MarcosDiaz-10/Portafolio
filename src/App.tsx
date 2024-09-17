import './App.css'
import { Home } from './componets/Home'
import { AboutMe } from './componets/AboutMe'
import { Skills } from './componets/Skills'
import { Navbar } from './componets/Navbar'
import { Projects } from './componets/Projects'
import { ContactMe } from './componets/ContactMe'





export const App = () => {
  

  return (
    <>
      <Navbar />
      <a id='home'></a>
      <Home/>
      <a id="about-me"></a>
      <AboutMe/>
      <a id="skills"></a>
      <Skills/>
      <a id="Projects"></a>
      <Projects/>
      <a id="Contact-me"></a>
      <ContactMe/>
    </>
  )
}


