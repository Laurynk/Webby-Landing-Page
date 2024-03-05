import styles from './about.module.css'
import Image from 'next/image'
import Spline from '@splinetool/react-spline';

import circleCheck from '../../../public/checkmark-circle.svg'

export default function About() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.animation}>
                    <Spline scene="https://prod.spline.design/ntGdQSkMSYThqHgE/scene.splinecode" />
                </div>

                <div className={styles.info}>
                    <h1 className={styles.header}>What Webby does</h1>
                    <p className={styles.subtext}>Join Webby and get ready to share, engage and manage your hobbies with like-minded communities.</p>

                    <div className={styles.appFeatures}>
                        <div className={styles.feature}>
                            <Image className={styles.checkMark} src={circleCheck} width={35} height={20} alt='circle-check' />
                            <p>Organize and manage your projects within personal repositories.</p>
                        </div>
                        <div className={styles.feature}>
                            <Image className={styles.checkMark} src={circleCheck} width={35} height={20} alt='circle-check' />
                            <p>Highlight your skills and projects to hiring managers.</p>
                        </div>
                        <div className={styles.feature}>
                            <Image className={styles.checkMark} src={circleCheck} width={35} height={20} alt='circle-check' />
                            <p>Participate in community challenges and share your latest creations.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}