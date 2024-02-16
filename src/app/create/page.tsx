"use client";
import { useState } from "react";
import Button from "@/components/Button/Button";
import styles from "./Page.module.css";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    const baseUrl = window.location.protocol + "//" + window.location.host;
    const apiUrl = `${baseUrl}/api/post`;

    e.preventDefault();
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const postCreated = window.confirm("Post created successfully");
    if (postCreated) {
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
      <Button buttonText="Create Post" />
    </form>
  );
}

export default CreatePage;
