import React from 'react';
import{FaYoutube, FaLinkedin, FaGithub} from "react-icons/fa6"

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Burger Box</h2>

            <p>Burger Box: Crafting Flavour, One Burger at a Time.</p>
            <br />
            <em>We give attention to genuine feedback.</em>

            <strong>All rights reserved @burgerbox</strong>
        </div>

        <aside>
            <h4>Follow Us</h4>

            <a href='https://youtube.com'><FaYoutube /></a>
            <a href='https://linkedin.com/in/mayanksinghal2920'><FaLinkedin /></a>
            <a href='https://github.com/MayankSinghal2920'><FaGithub /></a>

        </aside>
    </footer>
  )
}

export default Footer
