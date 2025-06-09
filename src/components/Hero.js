import React from 'react';

function Hero(props) {
    return (
        <>
  {/* Hero Section */}
  <section id="hero" className="hero section dark-background">
    <img
      src={`${process.env.PUBLIC_URL}/image/TakeCertificate.jpg`}
      alt=""
      data-aos="fade-in"
      className=""
    />
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <h2>Phann Chivoan</h2>
      <p>
        <span className="typed" data-typed-items="At Beltei University.">
          I'm a second year college student. <br/> <b> at Beltei International Univeristy.</b>
        </span>
        <span className="typed-cursor typed-cursor--blink" aria-hidden="true" />
        <span className="typed-cursor typed-cursor--blink" aria-hidden="true" />
      </p>
    </div>
  </section>
  {/* /Hero Section */}
</>

    );
}

export default Hero;