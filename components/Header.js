import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Main from "./Main";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.overlay}>
                <Navbar />
                <Main />
            </div>
        </div>
    );
}