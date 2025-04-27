import styles from "./Strip.module.css";
import Image from "next/image";

export default function Strip() {
    return (
        <div className={styles.strip}>
            <div className="container">
                <div className={styles.content} >
                    <div className={styles.info}>
                        <h3>01</h3>
                        <h2>Get Quick Help With an Expert</h2>
                        <p>Let us know where you’re going by explaining everything via phone. You can also do everything via email for your convenience.</p>
                    </div>
                    <Image src="/icons/2arrows.svg" alt="2arrows" width={120} height={120} className={styles.rotate} style={{transition: 'transform 0.3s ease'}}/>
                    <div className={styles.info}>
                        <h3>02</h3>
                        <h2>Receive Options via Email</h2>
                        <p>Get expert itineraries within minutes in your inbox. You can adjust any layover or pick airline. Your Travel Manager will do it for you.</p>
                    </div>
                    <Image src="/icons/3arrows.svg" alt="3arrows" width={120} height={120} className={styles.rotate} style={{transition: 'transform 0.3s ease'}}/>
                    <div className={styles.info}>
                        <h3>03</h3>
                        <h2>Choose Offer and Travel</h2>
                        <p>Pay securely online, make any adjustments, receive your e-tickets via email and you are ready to fly!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}