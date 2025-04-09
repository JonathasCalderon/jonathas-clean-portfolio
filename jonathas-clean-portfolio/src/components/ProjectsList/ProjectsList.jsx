import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { projects } from '../../portfolio'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './ProjectsList.css'

const ProjectsList = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div className={`${themeName} projects-list`}>
      <Header />

      <main>
        <section className='section'>
          <h2 className='section__title'>All Projects</h2>
          
          <div className='projects-list__grid'>
            {projects.map((project, index) => (
              <Link 
                key={index} 
                to={`/project/${index}`}
                className='projects-list__link'
              >
                <ProjectContainer project={project} />
              </Link>
            ))}
          </div>
          
          <div className='projects-list__back'>
            <Link to='/' className='projects-list__back-link'>
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectsList 