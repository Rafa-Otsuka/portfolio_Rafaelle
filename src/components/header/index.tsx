import styles from "./Header.module.css";

export function Header() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarComponent}`}>
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">
          Potfólio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link ms-5" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
