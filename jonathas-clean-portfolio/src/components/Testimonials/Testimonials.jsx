import { testimonials } from '../../portfolio'
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  if (!testimonials.length) return null
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current
      const updateMaxScroll = () => {
        setMaxScroll(container.scrollWidth - container.clientWidth)
      }
      
      updateMaxScroll()
      window.addEventListener('resize', updateMaxScroll)
      
      return () => window.removeEventListener('resize', updateMaxScroll)
    }
  }, [])

  const handleScroll = (direction) => {
    const container = containerRef.current
    if (!container) return

    const scrollAmount = container.clientWidth
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(maxScroll, scrollPosition + scrollAmount)
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    })
    setScrollPosition(newPosition)
  }

  const handleScrollEvent = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft)
    }
  }

  return (
    <section className='section testimonials' id='testimonials'>
      <h2 className='section__title'>Testimonials</h2>
      <div className='testimonials__wrapper'>
        {!isMobile && (
          <IconButton 
            className='testimonials__nav-btn testimonials__nav-btn--left'
            onClick={() => handleScroll('left')}
            disabled={scrollPosition <= 0}
            sx={{
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.main + '20',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}
        
        <div className='testimonials__container'>
          <Box 
            ref={containerRef}
            className='testimonials__grid'
            onScroll={handleScrollEvent}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className='testimonial__card'>
                <div className='testimonial__image'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='testimonial__img'
                  />
                </div>
                <div className='testimonial__content'>
                  <p className='testimonial__text'>{testimonial.text}</p>
                  <div className='testimonial__info'>
                    <h3 className='testimonial__name'>{testimonial.name}</h3>
                    <p className='testimonial__role'>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Box>
        </div>

        {!isMobile && (
          <IconButton 
            className='testimonials__nav-btn testimonials__nav-btn--right'
            onClick={() => handleScroll('right')}
            disabled={scrollPosition >= maxScroll}
            sx={{
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.main + '20',
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
      </div>
    </section>
  )
}

export default Testimonials 