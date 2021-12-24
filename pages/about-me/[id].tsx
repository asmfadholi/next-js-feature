import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/AboutMe.module.css'

const AboutMeDetail = () => {
    const router = useRouter()
    const currentId = router.query.id;
    return ( 
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
                <meta name="description about me" content="Generated by create next app" />
            </Head>

            <div className={styles.back} onClick={() => router.back()}>&larr; Back</div>
            <h1>About Me Page {currentId}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}

export default AboutMeDetail