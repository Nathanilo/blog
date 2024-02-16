"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import styles from "./Page.module.css";
import { Post } from "@prisma/client";

function EditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState({} as Post);

  useEffect(() => {
    const url = new URL(window.location.href);

    const id = url.searchParams.get("id");

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/post/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTitle(data.title);
        setContent(data.content);
        setPost(data);
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
    await fetch(`http://localhost:3000/api/post/${post.id}`, {
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
  );
}

export default EditPage;
