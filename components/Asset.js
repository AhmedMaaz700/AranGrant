import Image from "next/image";
import styles from "./Asset.module.css";
import assetData from '../jsons/assetData.json';

export default function Asset() {
    return (
        <div className={styles.asset}>
            <div className="container">
                <h2>Our customers are our <span>greatest asset</span></h2>
                <div className={styles.subtext}>
                    <p className={styles.pTag}>Excellent</p>
                    <Image src="/icons/stars.svg" alt="stars" width={100} height={50} style={{marginInline: '1rem'}} />
                    <p>Top rated <strong>4.7</strong> out of 5, based on <strong>2197</strong> reviews</p>
                </div>
                <div className={styles.cardContainer}>
                    {assetData.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div>
                                <Image src="/icons/stars.svg" alt="stars" width={100} height={20} style={{marginBottom: '1rem'}} />
                                <p className={styles.title}>{item.title}</p>
                                <p className={styles.content}>{item.content}</p>
                                <p className={styles.date}>{item.date}</p>
                            </div>
                            <div className={styles.imgContainer}>
                                <Image src={item.img} alt={item.title} width={50} height={50} className={styles.img} />
                                <p className={styles.client}>{item.client}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}