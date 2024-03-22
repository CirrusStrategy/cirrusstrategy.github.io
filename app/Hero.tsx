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
        <h2>Our Ethos:</h2>
        <p>
          We believe in the transformative potential of technology. Our passion
          lies in creating solutions that empower individuals and strengthen
          communities.
        </p>
        <h2>Impact Philosophy:</h2>
        <p>
          Technology should be a force for good. We design solutions that tackle
          urgent social challenges and create sustainable, long-term impact.
        </p>
        <h2>Call to Action:</h2>
        <p>
          Join us in shaping a better future. Nonprofits, advocates, and
          changemakers–let's collaborate to leverage technology for social
          progress.
        </p>
        <h2>Our Approach:</h2>
        <p>
          We are action-oriented and results-driven. Collaboration is key–we
          partner with diverse stakeholders to find solutions that truly make a
          difference.
        </p>
        <h2>Team and Values:</h2>
        <p>
          We are a team of dedicated problem-solvers driven by empathy,
          integrity, and a relentless pursuit of progress.
        </p>
        <h2>Stay Connected:</h2>
        <p>
          Be part of the conversation on tech-driven social impact. Follow our
          work, share your insights, and let's amplify our collective voice.
        </p>
        <h2>Contact Information:</h2>
        <p>
          Ready to explore partnership? Contact us at cirrusstrategy@gmail.com
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
