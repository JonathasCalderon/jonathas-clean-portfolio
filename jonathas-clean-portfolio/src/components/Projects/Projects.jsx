import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import { Link } from 'react-router-dom'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.slice(0, 4).map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
      
      <div className='projects__view-all'>
        <Link to='/projects' className='projects__view-all-link'>
          View All Projects
        </Link>
      </div>
    </section>
  )
}

export default Projects
