import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    );
}

export default Navbar;