"use client";
import Link from "next/link";

import { postsData } from "@/data/post";
import { useState } from "react";
import Button from "@/components/Button/Button";
import SearchBar from "@/components/SearchBar/SearchBar";
import PostCard from "@/components/PostCard/PostCard";
import styles from "./Page.module.css";

function PostPage() {
  const [posts, setPosts] = useState(postsData);
  const [ListView, setListView] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState(postsData);

  const handleClick = () => {
    setListView((prev) => (prev === true ? false : true));
  };

  return (
    <>
      <div className={styles.viewSearchContainer}>
        <div>
          <Button
            buttonText={ListView ? "View in Grid" : "View in List"}
            handleClick={handleClick}
          />
          {/* <Button buttonText="Grid view" /> */}
        </div>
        <SearchBar posts={postsData} setFilteredPosts={setFilteredPosts} />
      </div>
      <div>
        {ListView ? (
          <ul>
            {filteredPosts.map((post) => (
              <li key={post.id}>
                {/* <div>
                {post.title}
                <Link href={`/post/${post.id}`}>See more...</Link>
              </div> */}
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
