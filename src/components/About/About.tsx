import Navbar from '../UI/Navbar/Navbar';
import styles from './About.module.scss';

const About = () => {
    return (
        <div id="about" className={styles.block}>
            <Navbar></Navbar>
            <section className={styles.content}>
                <div className={styles.main}>
                    <h1 className={styles.mainText}>ALVIN HO</h1>
                    <span className={styles.subText}>Software Engineer</span>
                </div>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
        </div>
    );
}

export default About;