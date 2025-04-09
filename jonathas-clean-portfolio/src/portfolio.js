const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jonathascalderon.com',
  title: 'JC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jonathas Calderon',
  role: 'Software Developer',
  description:
    "I'm a skilled software developer with 5 years of experience, specializing in delivering high-quality solutions to complex challenges. Passionate about continuous learning, I stay up-to-date with the latest technologies. I excel in collaborative and remote team settings, bringing strong communication skills in English, Spanish, and Portuguese. My adaptability and dedication to excellence make me a valuable asset in dynamic development environments.",
  resume: '/ResumeJonathasCalderon2024.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/jonathas-calderon/',
    github: 'https://github.com/JonathasCalderon',
  },
}

const testimonials = [
  {
    name: 'John Doe',
    role: 'Senior Software Engineer',
    company: 'Tech Corp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Jonathas is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are outstanding.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Project Manager',
    company: 'Innovation Labs',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Working with Jonathas was a pleasure. His communication skills and ability to work in a team environment made our project a success.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartUp Inc',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Jonathas brought valuable expertise to our team. His technical knowledge and dedication to quality were instrumental in our project\'s success.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Owner',
    company: 'Digital Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Jonathas consistently delivered high-quality work and was always willing to go the extra mile. His technical expertise and collaborative nature made him an invaluable team member.',
  },
  {
    name: 'David Wilson',
    role: 'Lead Developer',
    company: 'Tech Innovations',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Having worked with Jonathas on multiple projects, I can confidently say that he is one of the most skilled and reliable developers I\'ve had the pleasure to collaborate with.',
  }
]

const projects = [
  {
    name: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with React and Node.js.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team workspaces, and progress tracking. Features include drag-and-drop organization and deadline reminders.',
    stack: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Weather Dashboard',
    description:
      'A weather dashboard that provides real-time weather data, forecasts, and interactive maps. Includes location-based weather alerts and historical weather data visualization.',
    stack: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Social Media Analytics',
    description:
      'A comprehensive social media analytics platform that tracks engagement metrics, audience growth, and content performance across multiple platforms with customizable reports.',
    stack: ['React', 'Python', 'Django', 'PostgreSQL', 'D3.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fitness Tracking App',
    description:
      'A mobile-first fitness tracking application with workout planning, progress monitoring, and nutrition tracking. Includes integration with wearable devices and social sharing features.',
    stack: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark/light mode, and optimized performance across all devices.',
    stack: ['React', 'Material-UI', 'Framer Motion', 'CSS-in-JS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
]

const skills = [
  'ReactJs',
  'Javascript',
  'C#',
  'SQL',
  'HTML',
  'CSS',
  'TypeScript',
  'Redux',
  'SASS',
  'Git',
  'CI/CD',
  'Jest',
  'MVVM',
  'WPF'
]

const contact = {
  email: 'calderonjonathas@gmail.com',
  phone: '+591 77906005',
  location: 'Cochabamba, Bolivia',
}

export { header, about, projects, skills, contact, testimonials }
