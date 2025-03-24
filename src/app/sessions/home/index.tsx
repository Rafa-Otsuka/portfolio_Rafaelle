import styles from "./Home.module.css";

export function HomeSession() {
  return (
    <section className={` ${styles.home}`}>
      <div className={`d-flex flex-column flex-lg-row justify-content-between align-items-center ${styles.homeDiv}`}>
        <div className={`d-flex justify-content-center align-items-center text-center ${styles.titleDiv}`}>
          <h1 className={`mb-5 ${styles.title}`}>RAFAELLE HEMMEL OTSUKA</h1>
        </div>
        <div className={`d-flex align-items-center ${styles.imageDiv}`}>
          <img className={`${styles.image}`} src="./backgroundImages/home_image.png" alt="Imagem" />
        </div>
      </div>
      <div className="firstWave"></div>
    </section>
  );
} 
