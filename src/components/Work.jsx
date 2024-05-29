import React from 'react'
import data from"../assests/data.json"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Work = () => {
  return (
    <div id="work">
        <h2>WORK</h2>
        <section>
            <article>
                <Carousel
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                interval={1000}
                autoPlay={true}
                >
                    {
                  data.project.map(i=>(
                    <div key={i.title} className="workItem">
                        <img src={i.imgSrc} alt={i.tittle}/>
                    <aside>
                        <h3>{i.title}</h3>
                        <p>{i.discription}</p>
                        <a target={"blank"} href={i.url}> View Demo</a>
                    </aside>
                    </div>
                  ))
                    }
                </Carousel>
            </article>
        </section>
    </div>
  )
};

export default Work