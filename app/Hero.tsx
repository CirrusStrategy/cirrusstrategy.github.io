import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.taglineHeader}>Cirrus Strategy</h1>
      <p className={styles.subtitle}>Coming soon...</p>
      <div className={styles.taglineContent}>
        <h2>What problem are you solving?</h2>
        <p>
          Our team has identified a critical issue faced by nonprofits: the
          fragmentation and inefficiency of their operational tools. Nonprofits
          often rely on a multitude of software and tools, leading to
          inefficient data collection, redundancy, and increased administrative
          burdens. Additionally, they face challenges related to limited
          resources, ineffective networking, and data privacy and security.
        </p>
        <h2>What is your concept of idea?</h2>
        <p>
          Our concept is a digital platform that integrates various management
          tools and social networking features to revolutionize how nonprofits
          operate, collaborate, and communicate their impact with one another.
          We envision a unique ecosystem where nonprofits can streamline their
          operations, foster strategic partnerships, and amplify their social
          impact for the better good. This platform is designed to address the
          common challenges faced by nonprofits on a day to day basis.
        </p>
        {/* 
        <div className={styles.tagline}>
          <p className={styles.taglineText}>
            Avenues Consulting Group provides consulting and project-based
            solutions for a wide range of industries such as medical, legal,
            real estate and technology.
          </p>
          <Link
            href="https://forms.gle/e63mdyowrN3vvTRF9"
            className={styles.link}
          >
            <button className={styles.applyBut}>Apply now</button>
          </Link>
          <Link href="/services" className={styles.link}>
            <button className={styles.applyBut + " " + styles.noBut}>
              Our services
            </button>
          </Link>
        </div>
        <div className={styles.imgSec}>
          <Image
            src={gradient}
            className={styles.gradImg}
            alt="Gradient Decoration Image"
          />
          <Image src={img} className={styles.mainImg} alt="Main Title Image" />
        </div>
  */}
      </div>
    </div>
  );
}
