import styles from './callToAction.module.css'

export default function CallToAction() {
    return(
        <div className={styles.container}>
            <div className={styles.cta}>
                <h1 className={styles.tagline}>Connect Through Passions: Share, Engage, Thrive</h1>
                <p className={styles.subtext}>To stay informed about our latest developments and features, subscribe to our newsletter.</p>

                <div className={styles.inputField}>
                    <input className={styles.emailInput} type='email' placeholder='Enter your email'/>
                    <button className={styles.accessBtn}>Get Access</button>
                </div>
            </div>

            <div className={styles.animationContainer}>
                <div className={styles.animation}>PlaceHolder</div>
            </div>
        </div>
    )
}