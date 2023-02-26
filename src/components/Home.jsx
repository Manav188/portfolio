import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from '../assets/me.png'

const Home = ({ratio}) => {
const clientCount=useRef(null)
const projectCount=useRef(null)

const animationClientCount = ()=>{
    animate(0,5, {
        duration:1,
        onUpdate:(v)=>(clientCount.current.textContent = v.toFixed())
    })
}
const animationProjectsCount = ()=>{
    animate(0,15, {
        duration:1,
        onUpdate:(v)=>(projectCount.current.textContent = v.toFixed())
    })
}
    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1{...animation.h1}>
                        Hi , I am <br />Manav Singh
                    </motion.h1>

                    <Typewriter
                        options={{
                            strings: ['A Developer', 'A Data Analyst', 'A Designer'],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            wrapperClassName: "typewriterpara",
                        }} />

                    <div>
                        <a href="mailto:manav330833@gmail.com">
                            Hire Me
                        </a>
                        <a href="#work">
                            Projects <BsArrowUpRight />
                        </a>

                    </div>


                    <article>
                        <p>
                            +
                            
                            <motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                            
                            
                        </p>
                        <span>Clients Worldwide</span>
                    </article>

                    <aside>
                    <article>
                        <p>
                            +
                            
                            <motion.span ref={projectCount} whileInView={animationProjectsCount}>500</motion.span>
                            
                        </p>
                        <span>Projects Done</span>
                    </article>

                    <article data-special>
                        <p>
                            Contact
                        </p>
                        <span>manav330833@gmail.com</span>
                    </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt='Manav'/>
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home