import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>
            Testimonial
        </h2>
        <section>
           
        <TestimonialCard name={"Bill Gates"}  feedback={"Your Developing skils are so good"} />
            <TestimonialCard name={"Sundar Pichai"}  feedback={"Your back-end skils are so good"} />
            <TestimonialCard name={"Elon Musk"}  feedback={"Your are the finest full stack Developer i ever meet"} />

        </section>
    </div>
  )
}

const TestimonialCard=({name,feedback})=>(
    <article>
        <img src="https://th.bing.com/th/id/R.6726ca2084d992f94b45a7cf9f1bfbef?rik=kHw51qLmi%2bcRAg&riu=http%3a%2f%2fwww.tbpelectric.com%2fwp-content%2fuploads%2f2022%2f06%2ftestimonials.png&ehk=hUZH5u4ebsm4Aw%2bCzP%2fLtOoJMiVxGH2vHpG522mEyak%3d&risl=&pid=ImgRaw&r=0" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial