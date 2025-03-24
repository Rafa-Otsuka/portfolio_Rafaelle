import styles from "./Projects.module.css";

export function ProjectsSession() {
  return (
    <section className={styles.projects}>
      <div className={`d-flex justify-content-center align-items-center ${styles.containerProjects}`}>
        <div className={`${styles.cardsDiv} d-flex flex-wrap justify-content-around align-items-center`}>
          <div className={`card ${styles.cardCustom}`}>
            <img src="./backgroundImages/alphaLogo.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Alpha - Hardware Store</h5>
              <p className="card-text">
               Um aplicativo de e-commerce para peças de hardware, desenvolvido no Android Studio.
              </p>
            </div>
          </div>
          <div className={`card ${styles.cardCustom}`}>
            <img src="./backgroundImages/charlie.png" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Charlie Streetwear</h5>
              <p className="card-text">
               Um CRUD de administrador de uma loja de roupas. Projeto desenvolvido com linguagem de servidor PHP e Bootstrap.
              </p>
            </div>
          </div>
          <div className={`card ${styles.cardCustom}`}>
            <img src="./backgroundImages/fox.svg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Fox - Loja de Brinquedos</h5>
              <p className="card-text">
               Um site em formato de ecommerce desenvolvido com Bootstrap, Laravel, Ajax, JS e PHP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
