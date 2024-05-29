import React from 'react'
import {  AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return <footer>
    <div>
        <img src={"https://www.api2cart.com/wp-content/uploads/2014/11/Developer.png"} 
        alt='Founder' 
        />
        <h2>Aman Singh</h2>
        <p>Motivation is Temporary, but discipline is last forever.</p>
    </div>
    <aside>
      <h2>Social Media</h2>

      <article>
        <a href='http://youtube.com' target={"blank"}>
          <AiFillYoutube />
        </a>
        <a href='https://github.com/Amans1221' target={"blank"}>
          <AiFillGithub />
        </a>
        <a href='http://instagram.com' target={"blank"}>
          <AiFillInstagram/>
        </a>
      </article>
    </aside>
      <a href='#home'><AiOutlineArrowUp /></a>

  </footer>
   
}

export default Footer