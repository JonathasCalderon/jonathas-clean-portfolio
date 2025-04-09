import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ProjectsList from './components/ProjectsList/ProjectsList'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <div className={`${themeName} app`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
