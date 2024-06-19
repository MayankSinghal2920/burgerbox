import React from 'react'
import {FaBurger, FaUser} from "react-icons/fa6"
import { Link } from 'react-router-dom'
import {FiShoppingCart, FiLogIn} from 'react-icons/fi'
import {motion} from "framer-motion";

const Header = ({isAuthenticated = false}) => {
  return (
    <nav>

      <motion.div initial={{x:"-100%"}} whileInView={{x:0}}
      >
      <FaBurger /> 
      </motion.div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart"><FiShoppingCart /></Link>

        <Link to={isAuthenticated?"/me":"login"}>

            {isAuthenticated ? <FaUser />: <FiLogIn />}
        </Link>

      </div>

    </nav>
  )
}

export default Header
