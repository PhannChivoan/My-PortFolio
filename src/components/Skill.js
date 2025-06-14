import React from 'react';

function Skill(props) {
    return (
        <>
  {/* Skills Section */}
  <section id="skills" className="skills section light-background">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Skills</h2>
      <p>
        All my knowledges as a second year college's student, i have been
        researching and understanding various langauges.
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row skills-content skills-animation">
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">
              <span>HTML</span> <i className="val">100%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>CSS</span> <i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>JavaScript</span> <i className="val">65%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={65}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>PHP</span> <i className="val">75%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>C#</span> <i className="val">65%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={65}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
        </div>
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">
              <span>React/Node js</span> <i className="val">70%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>Laravel</span> <i className="val">80%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>API</span> <i className="val">30%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={30}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>MySQL</span> <i className="val">75%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>SQL Server</span> <i className="val">75%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
        </div>
      </div>
    </div>
  </section>
  {/* /Skills Section */}
</>

    );
}

export default Skill;