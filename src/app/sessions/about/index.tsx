import styles from "./About.module.css";

export function AboutSession() {
  return (
    <section id="about" className={`${styles.about}`}>
      <div className={`d-flex ${styles.containerAbout}`}>
        <div className={`d-flex justify-content-center ${styles.imageDiv}`}>
          <div className={`mt-5 ${styles.image}`}>
            <img src="./backgroundImages/about_image.jpeg" alt="" />
          </div>
        </div>
        <div className={`d-flex justify-content-center ${styles.textDiv}`}>
          <div className={`mt-5 ${styles.cardDiv}`}>
            <div className={`mt-4 ${styles.titleDiv}`}>
              <h2 className={`text-center ${styles.titleAbout}`}>Sobre mim</h2>
            </div>
            <div className={`mt-3 ${styles.pDiv}`}>
              <p className={`${styles.textP}`}>
                Sou Rafaelle Hemmel Otsuka, tenho 20 anos e estudo Sistemas para
                Internet no Centro Universitário SENAC. Iniciei minha trajetória
                acadêmica em Design de Animação após concluir o ensino médio,
                mas, após um ano, decidi mudar de área para focar no
                desenvolvimento de soluções web. Além da minha formação, acumulo
                experiência em administração, recepção e atendimento ao público.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
