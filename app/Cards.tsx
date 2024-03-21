import Image from "next/image";
import styles from "../styles/Cards.module.css";
import grad1 from "../public/images/gradients/1.png";
import grad2 from "../public/images/gradients/2.png";
import grad3 from "../public/images/gradients/3.png";
import grad5 from "../public/images/gradients/5.png";

export default function Cards() {
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cardsSec}>
        <div>
          <div className={styles.card + " card"}>
            <Image src={grad3} alt="Gradient Image" />
            <div className={"cardContent"}>
              <h2>Curriculum Nights</h2>
              <p>
                Consultants will go through an extensive curriculum process
                curated by our development team to ensure education, efficiency,
                and awareness of common consulting strategies.
              </p>
            </div>
          </div>
          <div className={styles.card + " card"}>
            <Image src={grad5} alt="Gradient Image" />
            <div className={"cardContent"}>
              <h2>Showcase</h2>
              <p>
                Teams will present their final projects to clients and the
                cohort. Along with networking and recruitment opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
