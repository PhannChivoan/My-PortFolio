import React from 'react';

function Footer(props) {
    return (
        <footer id="footer" className="footer position-relative light-background">
  <div className="container">
    <div className="copyright text-center ">
      <p>
        © <span>Copyright</span>{" "}
        <strong className="px-1 sitename">My Portfolio</strong>{" "}
        <span>All Rights Reserved</span>
      </p>
    </div>
    <div className="credits">
      Designed by <a href="https://bootstrapmade.com/">Using Bootstrap</a>
    </div>
  </div>
</footer>

    );
}

export default Footer;