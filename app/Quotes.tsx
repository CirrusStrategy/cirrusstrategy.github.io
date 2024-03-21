import styles from "../styles/Quotes.module.css";

export default function Quotes() {
  return (
    <div className={styles.quotesWrapper}>
      <h1 className={styles.title}></h1>
      <div className={styles.quotesSec}>
        <p className={styles.quote}>
          Avenues Consulting provides tailored consulting and project-building
          opportunities for students of ALL majors and pre-professional goals.
          You’ll gain consulting experience while simultaneously immersing
          yourself in another field you’re passionate about (medical, tech, law,
          entertainment, etc.) All while being surrounded by a supportive,
          driven, and uplifting community!
        </p>
      </div>
    </div>
  );
}
