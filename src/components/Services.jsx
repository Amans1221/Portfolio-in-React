import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { AiFillCiCircle, AiFillAndroid,AiFillWindows } from 'react-icons/ai';
import {motion} from "framer-motion";

const Services = () => {

  const animation={
    whileInView:{
        x:0,
        y:0,
        opacity:1,
    },
    one:{
      opacity:0,
      x:"-100%",
    },
    twoAndThree:{
      opacity:0,
      y:"-100%",
    },
    four:{
      opacity:0,
      x:"100%",
    }
  }
  return (
    <div id='service'>
      <h2>Services</h2>
      <section>
        <motion.div className="serviceBox1" whileInView={animation.whileInView} initial={animation.one}>
          <h3>5+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div className="serviceBox2" whileInView={animation.whileInView} initial={animation.twoAndThree}>
          <AiFillCiCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div className="serviceBox3" whileInView={animation.whileInView} initial={animation.twoAndThree}
        transition={{deplay:0.2}}>
        <AiFillAndroid />
          <span>App Development</span>
        </motion.div>
        <motion.div className="serviceBox4" whileInView={animation.whileInView} initial={animation.four}>
        <AiFillWindows />
        <span>Desktop Development</span>
        </motion.div>
      </section>
    </div>
  )
    
  
}

export default Services