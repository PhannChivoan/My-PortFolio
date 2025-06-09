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
                src={`${process.env.PUBLIC_URL}/assets/img/portfolio/app-1.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/app-1.jpg"
                  title="App 1"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/portfolio/product-1.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/product-1.jpg"
                  title="Product 1"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/portfolio/branding-1.jpg`}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/branding-1.jpg"
                  title="Branding 1"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          
          
         
          
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