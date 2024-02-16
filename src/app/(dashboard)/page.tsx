"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import ManagePostCard from "@/components/ManagePostCard/ManagePostCard";
import { Post } from "@prisma/client";

export default function Home() {
  const [posts, setPosts] = useState([] as Post[]);
  const [filteredPosts, setFilteredPosts] = useState([] as Post[]);
  const [checked, setChecked] = useState(true);

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
        setChecked(!checked);
      } catch (error: any) {
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
        {checked ? (
          <Skeleton />
        ) : (
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
        )}
      </div>
    </>
  );
}
