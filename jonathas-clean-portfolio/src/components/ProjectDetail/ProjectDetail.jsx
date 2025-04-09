import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { projects } from '../../portfolio'
import { Link, useParams, Navigate } from 'react-router-dom'
import Header from '../Header/Header'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const { id } = useParams()
  
  // Check if the project exists
  if (!projects[id]) {
    return <Navigate to="/projects" replace />
  }
  
  const project = projects[id]

  return (
    <div className={`${themeName} project-detail`}>
      <Header />

      <main>
        <section className='section'>
          <div className='project-detail__container'>
            <h2 className='section__title'>{project.name}</h2>
            
            {project.image && (
              <div className='project-detail__image-container'>
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className='project-detail__image'
                />
              </div>
            )}
            
            <div className='project-detail__content'>
              <div className='project-detail__description'>
                <h3 className='project-detail__subtitle'>Description</h3>
                <p>{project.description}</p>
              </div>
              
              {project.stack && (
                <div className='project-detail__stack'>
                  <h3 className='project-detail__subtitle'>Technologies Used</h3>
                  <ul className='project-detail__stack-list'>
                    {project.stack.map((item, index) => (
                      <li key={index} className='project-detail__stack-item'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className='project-detail__links'>
                <h3 className='project-detail__subtitle'>Project Links</h3>
                <div className='project-detail__buttons'>
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='project-detail__button'
                    >
                      <GitHubIcon />
                      <span>Source Code</span>
                    </a>
                  )}
                  
                  {project.livePreview && (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='project-detail__button'
                    >
                      <LaunchIcon />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className='project-detail__back'>
              <Link to='/projects' className='project-detail__back-link'>
                Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectDetail 