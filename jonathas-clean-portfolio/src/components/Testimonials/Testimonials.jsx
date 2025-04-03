import { testimonials } from '../../portfolio'
import './Testimonials.css'

const Testimonials = () => {
  if (!testimonials.length) return null

  return (
    <section className='section testimonials' id='testimonials'>
      <h2 className='section__title'>Testimonials</h2>
      <div className='testimonials__grid'>
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
      </div>
    </section>
  )
}

export default Testimonials 