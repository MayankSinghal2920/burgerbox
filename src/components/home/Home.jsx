import React from 'react'
import {motion} from "framer-motion";
import Founder from './Founder';
import Menu from './Menu';

const Home = () => {

    // const options = {
    //     initial :{
    //         x:"-100%",
    //         opacity: "0.01"
    //     } ,
    //     whileInView :{
    //         x:"0%",
    //         opacity:"1"
    //     } 
    // }


  return (
    <>
        <section className='home'>

            <div>
                <motion.h1 
                initial={{
                    x:"-100%",
                    opacity:0.01
                }}

                animate={{
                    x:0,
                    opacity:1
                }}
                > 
                
                Burger Box

                </motion.h1>


                <motion.p 
                initial={{
                    x:"-100%",
                    opacity:0.01
                }}

                animate={{
                    x:0,
                    opacity:1
                }}

                transition={{
                    delay:0.2
                    }}
                    >
                        Unwrap the Flavour...
                        
                </motion.p>
            </div>

            <motion.a 
                href='#menu' 

                initial={{
                y:"-100%",
                opacity:"0.01"
                }}

                animate={{
                y:"0%",
                opacity:"1"
                }}

                transition={{
                    delay:"0.6"
                }}
            >

                    Explore Now

            </motion.a>

        </section>

        <Founder /> 

        <Menu />
    </>
  )
}

export default Home
