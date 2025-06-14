import React from 'react';

function Project(props) {
    return (
        <>
  {/* Portfolio Section */}
  <section id="portfolio" className="portfolio section light-background">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>My Projects</h2>
      <p>
        As a second-year IT student, these personal projects reflect my
        learning, creativity, and passion for software development as well as
        what I'm currently studying with my knowledges and research.
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div
        className="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order"
      >
        <ul
          className="portfolio-filters isotope-filters"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-app">HTML</li>
          <li data-filter=".filter-product">React / Node js</li>
          <li data-filter=".filter-branding">Laravel</li>
          <li data-filter=".filter-books">API</li>
        </ul>
        {/* End Portfolio Filters */}
        <div
          className="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <img
                src={`${process.env.PUBLIC_URL}/image/Screenshot 2025-06-14 093250.png`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Laravel</h4>
                <p class="p-2">My Laravel website for storing message using Rest API to store in my website.</p>
                <a
                  href="https://portfoliofeedback.onrender.com/"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
        
          
         
          
        </div>
        {/* End Portfolio Container */}
      </div>
    </div>
  </section>
  {/* /Portfolio Section */}
</>

    );
}

export default Project;