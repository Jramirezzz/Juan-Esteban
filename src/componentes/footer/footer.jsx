import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/juanestebanrp/" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Jramirezzz" target="_blank" rel="noopener noreferrer">
          <img src="./github.png" alt="GitHub" />
        </a>
        <a href="https://www.behance.net/juanesramirez5" target="_blank" rel="noopener noreferrer">
          <img src="./Behance.png" alt="Behance" />
        </a>
      </div>
      <p className="footer-name">Juan Esteban Ramírez Perdomo</p>
    </footer>
  );
}
