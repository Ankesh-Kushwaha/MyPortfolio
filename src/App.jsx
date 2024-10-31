import './App.css'
import Navbar from './components/NavBar/navbar'
import Intro from './components/Intro/intro'
import Skill from './components/skills/Skills'
import Project from './components/project/project'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
     </div>
  )
   
}

export default App
