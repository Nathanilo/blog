"use client";

// import { Post, postsData } from "../../data/post";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import ManagePostCard from "@/components/ManagePostCard/ManagePostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/post");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error: any) {
        // setError("Error fetching data: " + error.message);
        console.log("error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.searchContainer}>
          <SearchBar posts={posts} setFilteredPosts={setFilteredPosts} />

          <Link href="/create">
            <Button buttonText="Create Post" />
          </Link>
        </div>

        <div>
          <ul>
            {filteredPosts.map((post: Post) => (
              <li key={post.id}>
                <ManagePostCard
                  post={post}
                  posts={filteredPosts}
                  setPosts={setFilteredPosts}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
