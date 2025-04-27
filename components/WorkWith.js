import styles from "./WorkWith.module.css";
import Image from "next/image";

export default function WorkWith() {    
    return (
      <div className={styles.WorkWith}>
        <div className="container">
            <h2>Airlines we work with</h2>
            <p className={styles.pTag}>As a consolidator, we work with a variety of airlines around the world to provide our customers with the best possible travel options at competitive prices. Our partnerships with major airlines allow us to offer a wide range of flights to destinations across the globe, making it easier for our customers to book their travel arrangements all in one place.</p>

            <div className={styles.imageGrid}>
                <div className={styles.imageContainer}>
                    <Image src="/icons/singapore.svg" alt="Singapore Airlines" width={100} height={60} />
                    <Image src="/icons/emirates.svg" alt="Emirates Airlines" width={100} height={60} />
                    <Image src="/icons/qatar.svg" alt="Qatar Airlines" width={100} height={60} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/icons/singapore.svg" alt="Singapore Airlines" width={100} height={60} />
                    <Image src="/icons/emirates.svg" alt="Emirates Airlines" width={100} height={60} />
                    <Image src="/icons/qatar.svg" alt="Qatar Airlines" width={100} height={60} />
                </div>
            </div>
        </div>
      </div>
    );
}