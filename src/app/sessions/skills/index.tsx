import styles from "./Skills.module.css";

export function SkillsSession() {
  return (
    <section id="skills" className={`${styles.skills}`}>
      <div className={`d-flex ${styles.containerSkills}`}>
        {/* Imagem ao lado esquerdo */}
        <div className={`d-flex justify-content-center ${styles.imageDiv}`}>
          <img
            className={`${styles.computerImage}`}
            src="./backgroundImages/drawing_computer.png"
            alt=""
          />
        </div>

        {/* Skills */}
        <div className={`${styles.skillsCard}`}>
          {/* EXPERIÊNCIA */}
          <div className={`${styles.experienceDiv}`}>
            <div>
              <h3 className={`${styles.titleExperience}`}>Experiência</h3>
            </div>
            <div
              className={`d-flex justify-content-evenly mt-5 ${styles.textExperienceDiv}`}
            >
              <div className={`${styles.experienceItem}`}>
                <p className={`${styles.year}`}>2023 - 2024</p>
                <p className={`${styles.position}`}>Invertecnica Comercio, Servicos e Locacao de Solda</p>
              </div>
              <div className={`${styles.experienceItem}`}>
                <p className={`${styles.year}`}>2025</p>
                <p className={`${styles.position}`}>Quality Service apoio administrativo LTDA</p>
              </div>
            </div>
          </div>

          {/* EDUCAÇÃO */}
          <div className={`${styles.educationDiv}`}>
            <div>
              <h3 className={`${styles.titleEducation}`}>Educação</h3>
            </div>
            <div
              className={`d-flex justify-content-evenly mt-5 ${styles.textEducationDiv}`}
            >
              <div className={`${styles.educationItem}`}>
                <p className={`${styles.year}`}>2022</p>
                <p className={`${styles.degree}`}>Design de Animação - Centro Universitário SENAC</p>
              </div>
              <div className={`${styles.educationItem}`}>
                <p className={`${styles.year}`}>2023 - 2025</p>
                <p className={`${styles.degree}`}>Sistemas para Internet - Centro Universitário SENAC</p>
              </div>
            </div>
          </div>

          {/* HABILIDADES */}
          <div className={`${styles.skillsDiv}`}>
            <h3 className={`${styles.titleSkills}`}>Habilidades</h3>
            <ul className={`${styles.skillsList}`}>
              <li>Execel</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
