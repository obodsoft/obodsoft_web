export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Obod<span>Soft</span></h2>
            <p>Innovative Software Solutions</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} Obod Soft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
