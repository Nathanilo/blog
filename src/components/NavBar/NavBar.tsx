import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav>
            <ul className={styles.navbar}>
                <li>
                    Blog
                </li>
                <li>
                    <a href="/">Dasboard</a>
                </li>
                <li>
                    <a href="/post">Post</a>
                </li>
            </ul>
        </nav>
    );
}