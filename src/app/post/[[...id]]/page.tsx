"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import SearchBar from "@/components/SearchBar/SearchBar";
import PostCard from "@/components/PostCard/PostCard";
import styles from "./Page.module.css";
import { Post } from "@prisma/client";
import Link from "next/link";

function PostPage() {
  const [posts, setPosts] = useState([] as Post[]);
  const [ListView, setListView] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([] as Post[]);
  const [checked, setChecked] = useState(true);

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
        setChecked(!checked);
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
      {checked ? (
        <Skeleton />
      ) : (
        <div>
          {ListView ? (
            <ul className={styles.defaultList}>
              {filteredPosts.map((post) => (
                <Link href={`/postpage/?id=${post.id}`} key={post.id}>
                  <li key={post.id}>
                    <PostCard post={post} posts={posts} />
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <ul className={styles.GridList}>
              {filteredPosts.map((post) => (
                <Link href={`/postpage/?id=${post.id}`} key={post.id}>
                  <li key={post.id}>
                    <PostCard post={post} posts={posts} />
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default PostPage;
