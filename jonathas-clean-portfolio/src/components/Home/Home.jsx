import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import './Home.css'

const Home = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} home`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default Home 