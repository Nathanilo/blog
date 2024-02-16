"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import SearchBar from "@/components/SearchBar/SearchBar";
import PostCard from "@/components/PostCard/PostCard";
import styles from "./Page.module.css";
import { Post } from "@prisma/client";

function PostPage() {
  const [posts, setPosts] = useState([] as Post[]);
  const [ListView, setListView] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([] as Post[]);

  const handleClick = () => {
    setListView((prev) => (prev === true ? false : true));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = window.location.protocol + "//" + window.location.host;
        const apiUrl = `${baseUrl}/api/post`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error: any) {
        console.log("error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.viewSearchContainer}>
        <div>
          <Button
            buttonText={ListView ? "View in Grid" : "View in List"}
            handleClick={handleClick}
          />
        </div>
        <SearchBar posts={posts} setFilteredPosts={setFilteredPosts} />
      </div>
      <div>
        {ListView ? (
          <ul>
            {filteredPosts.map((post) => (
              <li key={post.id}>
                <PostCard post={post} posts={posts} />
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles.postslist}>
            {filteredPosts.map((post) => (
              <li key={post.id} className={styles.listItem}>
                <PostCard post={post} posts={posts} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default PostPage;
