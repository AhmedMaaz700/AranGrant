import Image from "next/image";
import styles from "./Footer.module.css";
import { useState } from "react";

export default function Footer() {
    
    
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerLinks}>  
                    <div className={styles.footerDivs}>
                        <Image src="/icons/logo.svg" alt="Logo" width={105} height={40} />
                        <p className={styles.logoTag}>Copyright © 2025<br /><a href="https://arangrant.com/en-in/">Arangrant.com</a> / TripRobotics Inc.,<br />California CST: 2157896,<br />Florida ST:45218</p>
                    </div>          
                    <div className={styles.footerDivs}>
                        <h3>Information</h3>
                        <nav className={styles.footerNav}>
                            <ul>
                                <li className={styles.listItems}>Help Center</li>
                                <li className={styles.listItems}>Contact</li>
                            </ul>
                        </nav>
                    </div>                   
                    <div className={styles.footerDivs}>
                        <h3>Company</h3>
                        <nav className={styles.footerNav}>
                            <ul>
                                <li className={styles.listItems}>About Us</li>
                                <li className={styles.listItems}>Privacy Policy</li>
                                <li className={styles.listItems}>Terms Of Use</li>
                            </ul>
                        </nav>
                    </div>                   
                    <div className={styles.footerDivs}>
                        <h3>Social Media</h3>
                        <p className={styles.sMediaTag}>Follow us on Social Media to find out <br />about latest updates on our progress</p>

                    </div>                   
                    <div className={styles.footerDivs}>
                        <h3>We Accept</h3>
                        <Image src="/icons/credit-cards.svg" alt="Payments" unoptimized width={180} height={50}
                            style={{
                                boxSizing: 'border-box',
                                height: 'auto',
                                maxWidth: '100%',
                                verticalAlign: 'bottom',
                            }} 
                        />
                    </div>                   
                </div>

                <div style={{marginBlockStart: '32px'}}>
                    <p className={styles.horizontalDivider}></p>
                </div>

                <p className={styles.pTag} >*All the fares displayed are in INR and include all taxes, fees and applicable surcharges. All prices are per person, based on business class weekday travel (Monday – Thursday), and depend on the chosen class of service, departure city, airline and the route. The maximum allowable stay is six months. Please call our toll-free line for current best prices and additional details. Savings up to 70% off are indicated off the full unrestricted published airfares of major airlines and may vary based on individual fare rules. Some airlines may impose additional baggage charges. The fares are subject to seat availability in the corresponding booking inventory. Seats are limited and may not be available on all flights and dates. The fares are non-refundable, non-exchangeable, and non-transferable. The fares and their governing rules are subject to change without prior notice. Other restrictions may apply. Less restrictive fares available at different rates.<br /><br />Copyright © 2025 <a href="https://arangrant.com/en-in/">Arangrant.com</a> / TripRobotics Inc., 1000 N. West Street, Suite 1294, Wilmington, Delaware 19801. California CST: 2157896, Florida ST:45218</p>

                <div className={styles.icons}>
                    <Image src="/icons/icon1.svg" alt="icon1" width={105} height={40} />
                    <Image src="/icons/icon2.svg" alt="icon2" width={105} height={40} />
                    <Image src="/icons/icon3.svg" alt="icon3" width={105} height={40} />
                </div>
            </div>
        </footer>
    );
}