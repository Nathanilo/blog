"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import styles from "./Page.module.css";
import { Post } from "@prisma/client";

function EditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState({} as Post);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    const url = new URL(window.location.href);

    const id = url.searchParams.get("id");

    const fetchData = async () => {
      try {
        const baseUrl = window.location.protocol + "//" + window.location.host;
        const apiUrl = `${baseUrl}/api/post/${id}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTitle(data.title);
        setContent(data.content);
        setPost(data);
        setChecked(!checked);
      } catch (error: any) {
        // setError("Error fetching data: " + error.message);
        console.log("error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...post, title, content };

    const baseUrl = window.location.protocol + "//" + window.location.host;
    const apiUrl = `${baseUrl}/api/post/${post.id}`;
    await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const postUpdated = window.confirm("Post updated successfully");
    if (postUpdated) {
      window.location.href = "/";
    }
  };

  return (
    <>
      {checked ? (
        <Skeleton />
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <Button buttonText="Save Post" />
        </form>
      )}
    </>
  );
}

export default EditPage;
