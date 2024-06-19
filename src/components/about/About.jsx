import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/PHOTO.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>BURGER BOX</h4>
          <p>
          At Burger Box, we aim to serve the freshest, most delicious burgers every day.
          </p>

          <p>
            Explore the menu. Click below!
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Mayank Singhal</h3>
            </div>

            <p>
            Hey Everyone, Mayank Singhal here, the founder of Burger Box.<br/>
            Burger Box: Crafting Flavour, One Burger at a Time.


            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
