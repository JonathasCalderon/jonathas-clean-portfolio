import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { projects } from '../../portfolio'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
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
              <div key={index} className='projects-list__item'>
                <h3 className='projects-list__title'>{project.name}</h3>
                <p className='projects-list__description'>{project.description}</p>
                
                {project.stack && (
                  <ul className='projects-list__stack'>
                    {project.stack.map((item, i) => (
                      <li key={i} className='projects-list__stack-item'>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className='projects-list__links'>
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='projects-list__link'
                    >
                      Source Code
                    </a>
                  )}
                  
                  {project.livePreview && (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='projects-list__link'
                    >
                      Live Preview
                    </a>
                  )}
                  
                  <Link to={`/project/${index}`} className='projects-list__link'>
                    View Details
                  </Link>
                </div>
              </div>
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