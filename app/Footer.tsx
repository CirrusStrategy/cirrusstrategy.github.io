import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.socialSection}>
          <div className={styles.socialLink}>
            <Link href="https://instagram.com/csirrus/">
              <Image
                src="/images/icons/instagram.svg"
                height={50}
                width={50}
                alt="Instagram link"
              />
            </Link>
          </div>
          {/*<div className={styles.socialLink}>
            <Link href="https://www.linkedin.com/company/avenues-consulting-group-usc/">
              <Image
                src="/images/icons/linkedin.svg"
                height={50}
                width={50}
                alt="Linkedin link"
              />
            </Link>
          </div>
  */}
        </div>
        <div className={styles.bottomText}>
          <p>Copyright &copy;2024 Cirrus Strategy.</p>
        </div>
      </div>
    </footer>
  );
}
