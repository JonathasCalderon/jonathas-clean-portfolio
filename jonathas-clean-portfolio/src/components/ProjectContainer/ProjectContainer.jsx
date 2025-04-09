import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project-card'>
    {project.image && (
      <div className='project-card__image-container'>
        <img 
          src={project.image} 
          alt={project.name} 
          className='project-card__image'
        />
      </div>
    )}
    <h3>{project.name}</h3>

    <p className='project-card__description'>{project.description}</p>
    {project.stack && (
      <ul className='project-card__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project-card__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
