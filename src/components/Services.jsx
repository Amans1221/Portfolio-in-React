import React from 'react'
import { Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img3 from "../assests/img-3.jfif"
import img5 from "../assests/img-5.jpg"


const Services = () => {
  return (
    <div>
        <Carousel 
        infiniteLoop 
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1500} >
            <div>
                <img src={img3} alt="Item1"/>
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img5} alt="Item3"/>
                <p className='legend'>Peer-to-peer Support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services