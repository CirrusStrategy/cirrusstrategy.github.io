import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.taglineHeader}>Cirrus Strategy</h1>
      <p className={styles.subtitle}>Coming soon...</p>
      <div className={styles.taglineContent}>
        <h2>Mission Statement:</h2>
        <p>
          Cirrus Strategy harnesses the power of technology to drive social
          change. We bridge divides, accelerate innovation, and champion a more
          just and equitable world.
        </p>
        <h2>Mission Statement:</h2>
        <p>
          Cirrus Strategy leverages the power of technology to create positive 
          social impact. At Cirrus we connect meaningful action with innovation. 
          We champion a just and equitable world.
        </p>
        <h2>Our Approach:</h2>
        <p>
          There are a variety of obstacles that limit the ability to enact change.
          By developing the right platforms and applications, we can eliminate 
          these obstacles and truly make a difference. 
        </p>
        <h2>Call to Action:</h2>
        <p>
          Join us in shaping a better future. Nonprofits, advocates, and
          changemakers–let&apos;s collaborate to leverage technology for social
          progress.
        </p>
        <h2>Stay Connected:</h2>
        <p>
          Be part of the conversation on tech-driven social impact. Follow our
          work, share your insights, and let&apos;s amplify our collective
          voice.
        </p>
        <h2>Contact Information:</h2>
        <p>
          Ready to explore partnership? Contact us at{" "}
          <a href="mailto:cirrusstrategy@gmail.com">cirrusstrategy@gmail.com</a>{" "}
          or connect on social media. Together, we can build a more just world
          through technology.
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
