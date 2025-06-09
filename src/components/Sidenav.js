import React from 'react';

function Sidenav(props) {
    return (
        <div>
            <header id="header" className="header dark-background d-flex flex-column">
  <i className="header-toggle d-xl-none bi bi-list" />
  <div className="profile-img">
    <img
      src={`${process.env.PUBLIC_URL}/image/168_1054 (2).JPG`}
      className="img-fluid rounded-circle"
      style={{ width: 150, height: 150, objectFit: "cover" }}
    />
  </div>
  <a
    href="index.html"
    className="logo d-flex align-items-center justify-content-center"
  >
    <h1 className="sitename">Phann Chivoan</h1>
  </a>
  <div className="social-links text-center">
    <a href="https://github.com/PhannChivoan" className="twitter">
      <i className="bi bi-github" />
    </a>
    <a href="https://www.facebook.com/chivorn.phann.0/" className="facebook">
      <i className="bi bi-facebook" />
    </a>
    <a href="https://t.me/PhannChivoan" className="telegram">
      <i className="bi bi-telegram" />
    </a>
  </div>
  <nav id="navmenu" className="navmenu">
    <ul>
      <li>
        <a href="#hero" className="active">
          <i className="bi bi-house navicon" />
          Home
        </a>
      </li>
      <li>
        <a href="#about">
          <i className="bi bi-person navicon" /> About
        </a>
      </li>
      <li>
        <a href="#resume">
          <i className="bi bi-file-earmark-text navicon" /> Resume
        </a>
      </li>
      <li>
        <a href="#portfolio">
          <i className="bi bi-images navicon" /> Project
        </a>
      </li>
      <li>
        <a href="#contact">
          <i className="bi bi-envelope navicon" /> Contact
        </a>
      </li>
    </ul>
  </nav>
</header>

        </div>
    );
}

export default Sidenav;