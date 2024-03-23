import styles from "../../styles/aboutus/Content.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Content() {
  return (
    <>
    <div className={styles.content}>
      <div className={styles.contentSec}>
        <h2 className={styles.header}>
          At Cirrus Strategy, we believe that anyone can create impactful
          social change with the right technology.
        </h2>
        <p className={styles.text}>
          A significant obstacle faced by proponents of social change is their
          inability to connect with the right resources. Cirrus Strategy aims to 
          develop platforms that eliminate that obstacle through proper 
          networking and artificial intelligence.
        </p>
        <p className={styles.text}>
          Two issues we are currently focused on are sustainable nonprofit 
          development and housing inaccess. We are conducting research on problems 
          faced by nonprofit organizations and affordable housing advocates to 
          develop platforms to best address their needs. We look forward to 
          future projects that can resolve more social issues.
        </p>
        <p className={styles.specialText}>
          <span className={styles.bold}>
            Ready to take the first step towards social change?&nbsp;
          </span>
          Contact us at{" "}
          <a href="mailto:cirrusstrategy@gmail.com">cirrusstrategy@gmail.com</a> to
          connect with us and see how we can collaborate. We can&apos;t wait to 
          hear from you!
        </p>
      </div>
    </div>
     </>
  );
}
