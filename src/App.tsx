import './App.css'
import { Home } from './componets/Home'
import { AboutMe } from './componets/AboutMe'
import { Skills } from './componets/Skills'





export const App = () => {
  

  return (
    <>
      <a id='home'></a>
      <Home/>
      <a id="about-me"></a>
      <AboutMe/>
      <a id="skills"></a>
      <Skills/>
    </>
  )
}


