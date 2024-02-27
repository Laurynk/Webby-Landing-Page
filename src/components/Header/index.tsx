import styles from './header.module.css'
import Image from 'next/image'

import Logo from '../../../public/logo.svg'

export default function Header() {
    
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={Logo} width={150} height={150} alt="webby-logo"/>
            </div>
            <div className={styles.buttons}>
                <button className={styles.login}>Login</button>
                <button className={styles.signup}>Sign Up</button>
            </div>
        </div>
    )
}