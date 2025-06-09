import React from 'react';

function Resume(props) {
    return (
       <>
  {/* Resume Section */}
  <section id="resume" className="resume section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Resume</h2>
      <p>
        Take a look at my resume to learn more about my experience and
        qualifications.{" "}<a
    href="/Chivoan_CV.pdf" 
    download="PhannChivoan_CV.pdf"
    className="btn btn-primary btn-sm ms-2"
  >
    Download My Resume
  </a>
      </p>
        
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>Phann Chivoan</h4>
            <p>
              <em>
                I am a second-year IT Software Engineering student with a strong
                passion for building practical solutions through code. Eager to
                learn, grow, and contribute to real-world tech projects.
              </em>
            </p>
            <ul>
              <li>Kilometer 06, Russey Keo, Phnom Penh</li>
              <li>(+855) 166 545 46</li>
              <li>phannchivoan.biu@gmail.com</li>
            </ul>
          </div>
          {/* Edn Resume Item */}
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>
              Studying Software Engineering at <b>Beltei University</b>
            </h4>
            <h5>2023-Now</h5>
          </div>
          {/* Edn Resume Item */}
          <div className="resume-item">
            <h4>
              Graduated from <b>Beltei International School</b>
            </h4>
            <h5>2023 (Graduated)</h5>
          </div>
          {/* Edn Resume Item */}
          <div className="resume-item">
            <h4>
              Graduated in ESL (English Second Language) from{" "}
              <b>Beltei International School</b>
            </h4>
            <h5>2021 (Graduated)</h5>
          </div>
          {/* Edn Resume Item */}
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
          <h3 className="resume-title">Declaration</h3>
          <div className="resume-item">
            <p>
              <em>
                I certify that all data and information which I have provide
                above are true, complete and correct to best of my knowledge and
                belief. Thank you for reading my curriculum vitae.
              </em>
            </p>
            <h4>Acknowledgement</h4>
            <p>
              <em>
                I would like to express my sincere gratitude to all the
                individuals who have supported and guided me throughout my
                academic and professional journey. Their valuable insights and
                encouragement have greatly contributed to the development of my
                skills and experiences outlined in this curriculum vitae.
              </em>
            </p>
          </div>
          {/* Edn Resume Item */}
          <div className="resume-item">
            <h4>Hobbies</h4>
            <p>
              <em>My Hobbies During Free Time</em>
            </p>
            <ul>
              <li>Building Personal Web Projects</li>
              <li>Learning New Programming Languages or Frameworks</li>
              <li>Code Debugging</li>
              <li>Read Book</li>
              <li>Self Researching</li>
              <li>Play Sport</li>
              <li>GYM</li>
            </ul>
          </div>
          {/* Edn Resume Item */}
        </div>
      </div>
    </div>
  </section>
  {/* /Resume Section */}
</>

    );
}

export default Resume;