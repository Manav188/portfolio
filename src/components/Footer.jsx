import React from 'react'
import {
    AiFillInstagram,
    AiOutlineArrowUp,
    AiFillGithub
  } from "react-icons/ai";

const Footer = () => {
  return (
<footer>
    <div>
        <h2>Manav Singh</h2>
        <p>Motivation is temporary, but discipline last forever</p>
    </div>
    <aside>
        <h2>
            Social Media
        </h2>
        <article>
            <a href='https://instagram.com/manav_singh188' target={'blank'}><AiFillInstagram/></a>
            <a href="https://github.com/Manav188" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
    </aside>
    <a href="#home"><AiOutlineArrowUp/></a>
</footer>

  )
}

export default Footer