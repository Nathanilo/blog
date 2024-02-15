import { useState } from "react";
import styles from "./SearchBar.module.css";
import { Post } from "@/data/post";


interface SearchBarProps {
  posts: Post[]
  setFilteredPosts: React.Dispatch<
    React.SetStateAction<Post[]>
  >;
}

export default function SearchBar({ posts, setFilteredPosts }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    // Filter posts based on the search term
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(term.toLowerCase())
    );

    // Update the filtered posts in the parent component
    setFilteredPosts(filteredPosts);
  };

  return (
    <div>
      <input
        className={styles.searchbar}
        type="search"
        placeholder="Search for a post..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
