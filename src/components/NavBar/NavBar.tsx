import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <p>BlogVerse</p>
      </a>
      <ul>
        <li>
          <a href="/">Dasboard</a>
        </li>
        <li>
          <a href="/post">Posts</a>
        </li>
      </ul>
    </nav>
  );
}
