import styles from './memberships.module.css'
import Image from 'next/image'
import Spline from '@splinetool/react-spline';

import greenCheck from '../../../public/green-checkmark.svg'

export default function Memberships() {
    return(
        <div className={styles.container}>
            <h1 className={styles.heading}>Webby Membership Plans</h1>

            <div className={styles.plans}>
                <div className={styles.plan}>
                    <div className={styles.header}>
                        <h3 className={styles.planName}>Webby Pro</h3>
                        <div className={styles.animation}>
                            <Spline scene="https://prod.spline.design/SAH6hqVMmPcuJrok/scene.splinecode" />
                        </div>
                        <div className={styles.price}>
                            <h1 className={styles.priceNum}>$20</h1>
                            <h3 className={styles.month}>/month</h3>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.feature}>
                            <Image src={greenCheck} width={35} height={35} alt='green-checkmark'/>
                            <p className={styles.subtext}>Advanced analytics and reporting</p>
                        </div>
                        <div className={styles.feature}>
                            <Image src={greenCheck} width={35} height={35} alt='green-checkmark'/>
                            <p className={styles.subtext}>Enhanced customer support</p>
                        </div>
                        <div className={styles.feature}>
                            <Image src={greenCheck} width={35} height={35} alt='green-checkmark'/>
                            <p className={styles.subtext}>Exclusive members-only content</p>
                        </div>

                        <button className={styles.buyNow}>Buy now</button>
                    </div>
                </div>

                <div className={styles.plan}>
                    <div className={styles.header}>
                        <h3 className={styles.planName}>Webby Premium</h3>
                        <div className={styles.animation}>
                            <Spline scene="https://prod.spline.design/D0BLGTnIIRkoBrYs/scene.splinecode" />
                        </div>
                        <div className={styles.price}>
                            <h1 className={styles.priceNum}>$45</h1>
                            <h3 className={styles.month}>/month</h3>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.feature}>
                            <Image src={greenCheck} width={35} height={35} alt='green-checkmark'/>
                            <p className={styles.subtext}>Increased project file storage</p>
                        </div>
                        <div className={styles.feature}>
                            <Image src={greenCheck} width={35} height={35} alt='green-checkmark'/>
                            <p className={styles.subtext}>enhanced repository security and privacy</p>
                        </div>
                        <div className={styles.feature}>
                            <Image src={greenCheck} width={35} height={35} alt='green-checkmark'/>
                            <p className={styles.subtext}>customizable themes and layouts</p>
                        </div>

                        <button className={styles.buyNow}>Buy now</button>
                    </div>
                </div>

                <div className={styles.plan}>
                    <div className={styles.header}>
                        <h3 className={styles.planName}>Webby Gold</h3>
                        <div className={styles.animation}>
                            <Spline scene="https://prod.spline.design/B6xsg0wJJ7zPO2hH/scene.splinecode" />
                        </div>
                        <div className={styles.price}>
                            <h1 className={styles.priceNum}>$60</h1>
                            <h3 className={styles.month}>/month</h3>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.feature}>
                            <Image src={greenCheck} width={35} height={35} alt='green-checkmark'/>
                            <p className={styles.subtext}>Integration with third party apps</p>
                        </div>
                        <div className={styles.feature}>
                            <Image src={greenCheck} width={35} height={35} alt='green-checkmark'/>
                            <p className={styles.subtext}>Priority access to new features</p>
                        </div>
                        <div className={styles.feature}>
                            <Image src={greenCheck} width={35} height={35} alt='green-checkmark'/>
                            <p className={styles.subtext}>Access to exclusive workshops and guides</p>
                        </div>

                        <button className={styles.buyNow}>Buy now</button>
                    </div>
                </div>

                

                
            </div>
        </div>
    )
}