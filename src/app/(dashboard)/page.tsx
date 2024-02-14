"use client";

import { Post, postsData } from "../../data/post";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import ManagePostCard from "@/components/ManagePostCard/ManagePostCard";

export default function Home() {
  const [posts, setPosts] = useState(postsData);


  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.searchContainer}>
          <SearchBar />

          <Link href="/create">
            <Button buttonText="Create Post" />
          </Link>
        </div>

        <div>
          <ul>
            {posts.map((post: Post) => (
              <li key={post.id}>
                <ManagePostCard post={post} posts={posts} setPosts={setPosts} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

