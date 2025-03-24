import styles from "./Footer.module.css";

export function Footer() {
    return (
        <section className={styles.footer}>
            <div className={`d-flex justify-content-center ${styles.containerFooter}`}>
                <div className={styles.footerDiv}>
                    <div className={styles.footerItem}>
                        <img className={styles.footerImageTel} src="./backgroundImages/whatsapp.png" alt="Icon" />
                        <a href="https://web.whatsapp.com/" className={styles.footerText}><strong>(11) 99681-3200</strong></a>
                    </div>
                    <div className={styles.footerItem}>
                        <img className={styles.footerImageInstagram} src="./backgroundImages/instagram.png" alt="Icon" />
                        <a href="https://www.instagram.com/" className={styles.footerText}><strong>rafa_otsuka_</strong></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
