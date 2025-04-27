import Image from "next/image";
import styles from "./Navbar.module.css";
import Button from '@mui/material/Button';
import Link from "next/link";

export default function Navbar() {    
    return (
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.navbarContent}>
            <div className={styles.left}>
              <Link href="/" style={{ display: "inline-block" }}>
                <Image src="/icons/logo.svg" alt="Logo" width={105} height={40} />
              </Link>
              <p>Hotels</p>
              <p>Help</p>
            </div>
            <div className={styles.right}>
                <Button variant="outlined" className={styles.button}>My Trip</Button>
                <div className={styles.call}>
                    <div>
                        <p>Phone-only deals</p>
                        <div className={styles.call}>
                            <Image src="/icons/phone.svg" alt="phone" width={16} height={16} />
                            <p> Call: +18336190908</p>
                        </div>
                    </div>
                    <Image src="/consultant.png" alt="consultant" width={56} height={56} />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}