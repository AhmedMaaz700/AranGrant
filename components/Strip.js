import styles from "./Strip.module.css";
import Image from "next/image";

export default function Strip() {
    return (
      <div className={styles.strip}>
        <div className="container">
          <div className={styles.subtext1} style={{ gap: "16px" }}>
            <p className={styles.pTag1}>
              Our customers <strong>trust us!</strong>
            </p>
            <div className={styles.subtext2}>
              <div className={styles.starDiv}>
                <p className={styles.pTag2}>Excellent</p>
                <Image
                  src="/icons/stars.svg"
                  alt="stars"
                  width={100}
                  height={30}
                  className={styles.starsImage}
                />
              </div>
              <p>
                Top rated <strong>4.7</strong> out of 5, based on{" "}
                <strong>2,197</strong> reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}