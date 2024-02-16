"use client";

import React, { useState, ReactNode } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";


interface FormProps {
  buttonText: string;
}

const Form: React.FC<FormProps> = ({ buttonText }): ReactNode => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");

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
      <Button buttonText={buttonText} />
    </form>
  );
};

export default Form;
