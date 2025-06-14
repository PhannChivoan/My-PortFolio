import React from 'react';

function About(props) {
    return (
        <>
  {/* About Section */}
  <section id="about" className="about section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        Greeting! My name is Phann Chivoan. I’m a second-year IT Software
        Engineering student with a strong passion for technology, programming,
        and building innovative solutions. I'm currently gaining hands-on
        experience in web development, databases, and software design, and I'm
        always looking for opportunities to apply what I learn in real-world
        projects.
      </p>
    </div>
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4">
          <img src={`${process.env.PUBLIC_URL}/image/OnTrip.jpg`} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 content">
          <h2>Major : Software Engineering</h2>
          <p className="fst-italic py-3">My personal information :</p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <strong>Birthday:</strong> <span>31 August 2004</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <strong>Website:</strong> <span><a href="https://github.com/PhannChivoan">https://github.com/PhannChivoan</a></span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                  <span>+855 166 546</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                  <span>Phnom Penh, Cambodia</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                  <span>20</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                  <span>Studying Bachelor</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Email:</strong>{" "}
                  <span>phannchivoan.biu@gmail.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Status:</strong>{" "}
                  <span>Student</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="py-3">
            “I am passionate about software development and constantly seeking
            to improve my skills through hands-on projects and continuous
            learning.”
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* /About Section */}
</>

    );
}

export default About;