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
          We welcome students from all majors and backgrounds to join our team
          and contribute their unique skills and perspectives. We focus on the
          following industries:{" "}
          <span className={styles.bold}>
            pre-law, pre-med, pre-education, tech, and real estate
          </span>
          .
        </p>
        <p className={styles.text}>
          Our team of talented students from a diverse range of backgrounds and
          majors work together to provide pro-bono consulting services to
          companies in pre-professional industries. Not only will you gain
          valuable skills and experience, but you will also have the opportunity
          to gain mentorship, network, and gain an industry perspective.
        </p>
        <p className={styles.text}>
          Joining Avenues is not just about gaining experience and skills, it is
          also about being part of a community of like-minded individuals who
          are passionate about making a difference. Our team participates in
          various social and professional events throughout the year, providing
          opportunities to connect with other students and industry
          professionals.
        </p>
        <p className={styles.specialText}>
          <span className={styles.bold}>
            Ready to take the first step in joining our team?&nbsp;
          </span>
          Fill out our{" "}
          <Link href="https://forms.gle/2qXD2SRk3LfSQfnFA">
            potential member interest form
          </Link>{" "}
          or contact us at{" "}
          <a href="mailto:uscavenues@gmail.com">uscavenues@gmail.com</a> to
          learn more. We can&apos;t wait to hear from you!
        </p>
      </div>
    </div>
     </>
  );
}
