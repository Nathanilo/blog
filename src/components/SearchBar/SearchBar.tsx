import styles from './SearchBar.module.css'

export default function SearchBar() {
  return (
   
      <input
        className={styles.searchbar}
        type="search"
        placeholder="search"
        name="search"
      />
   
  );
}
