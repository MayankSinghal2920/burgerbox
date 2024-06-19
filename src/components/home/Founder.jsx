import React from 'react';
import {motion} from "framer-motion";
import me from "../../assets/founder.jpg"

const Founder = () => {
 
  // const options ={
  //   initial:{
  //     x:"-100%",
  //     opacity:0
  //   },
  //   whileInView:{
  //     x:0,
  //     opacity:1

  //   }
  // }



  return (
    <section className='founder'>
      <motion.div  initial={{
                    x:"-100%",
                    opacity:0.01
                }}

                whileInView={{
                    x:0,
                    opacity:1
                }}>

        <img src={me} alt="Founder" height={200} width={200} />

        <h3>Mayank Singhal</h3>

        <p>Hey Everyone, Mayank Singhal here, the founder of Burger Box.<br/>
        At Burger Box, we aim to serve the freshest, most delicious burgers every day.</p>
      </motion.div>
    </section>
  )
}

export default Founder
