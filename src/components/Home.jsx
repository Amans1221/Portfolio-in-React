import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import  Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../assests/img1.png"


const Home = () => {
const ClientCount = useRef(null);
const ProjectCount = useRef(null);


const animationclientcount = () =>{
    animate(0,100,{
        duration:1,
        onUpdate:(v)=>(ClientCount.current.textContent = v.toFixed()),

    });
};
const animationprojectcount = () =>{
    animate(0,500,{
        duration:1,
        onUpdate:(v)=>(ProjectCount.current.textContent = v.toFixed()),

    });
};

    const animation
        = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0
            },
            whileInView: {
                x: "0",
                opacity: 1
            },
        },
        button:{
            initial: {
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: "0",
                opacity: 1
            },
        }
    }
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animation.h1}>
                        Hi I am <br /> Aman Singh
                    </motion.h1>
                    <Typewriter 
                     options={{
                        strings: ["A Developer","A Designer","A Creator"],
                        autoStart: true,
                        loop:true,
                        cursor:"",
                        wrapperClassName:"typewritterpara"
                    }}
                    />
                    <div>
                        <a href="mailto:aman@gmail.com">hire Me{" "}
                        </a>
                        <a href="#work">Project <BsArrowUpRight /> </a>
                    </div>
                    <article>
                        <p>
                    <motion.span whileInView={animationclientcount} ref={ClientCount}></motion.span>
                        </p>
                        <span>Client Worldwide</span>
                    </article>
                    <aside>
                    <article>
                        <p>
                    <motion.span whileInView={animationprojectcount} ref={ProjectCount}></motion.span>
                        
                        </p>
                        <span>Project Done</span>
                    </article>
                    <article data-special>
                        <p>
                           Contact
                        </p>
                        <span>aman@gmail.com</span>
                    </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="aman"></img>
            </section>
            <BsChevronDown />
        </div>
    );
}

export default Home