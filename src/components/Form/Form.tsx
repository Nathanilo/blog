"use client";

import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";

interface FormProps {
  buttonText: string;
  onSubmit: (title: string, content: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit, buttonText }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
    console.log("title:", title, "content:", content, "submitted!");
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
