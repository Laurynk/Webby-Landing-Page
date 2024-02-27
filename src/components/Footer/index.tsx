import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../public/logo.svg'

export default function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.resources}>
                <Link className={styles.link} href='/'>About</Link>
                <Link className={styles.link} href='/'>Cookie Policy</Link>
                <Link className={styles.link} href='/'>Privacy Policy</Link>
                <Link className={styles.link} href='/'>User Agreement</Link>
                <Link className={styles.link} href='/'>Accessability</Link>
            </div>
            <hr className={styles.divider}></hr>
            <div className={styles.trademark}>
                <Image src={Logo} width={90} height={90} alt='webb-logo' />
                <p className={styles.registration}>© Webby Coporation 2024</p>
            </div>
        </div>
    )
}