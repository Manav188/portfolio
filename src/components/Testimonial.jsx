import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonials</h2>

        <section>
            <TestimonialCard name={'Abhishek'}
            feedback={'Your skills are really good as a begineer'}/> 
            <TestimonialCard name={'Vivek'}
            feedback={'good to know you as a developer'}/>
             <TestimonialCard name={'Anjali'}
            feedback={'Thanks for helping in React'}/>
        </section>
    </div>
  )
}

const TestimonialCard=({name,feedback})=>(
    <article>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='user'/>
    <h4>{name}</h4>
    <p>{feedback}</p>
    </article>
)
export default Testimonial