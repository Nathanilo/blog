"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import styles from "./Page.module.css";
import { Post } from "@prisma/client";
import Button from "@/components/Button/Button";

function Postpage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState({} as Post);
  const [checked, setChecked] = useState(true);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);

    const id = url.searchParams.get("id");
    console.log("id: ", id);

    const fetchData = async () => {
      try {
        const baseUrl = window.location.protocol + "//" + window.location.host;
        const apiUrl = `${baseUrl}/api/post/${id}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("data: ", data);
        setTitle(data.title);
        setContent(data.content);
        setPost(data);
        setChecked(!checked);
      } catch (error: any) {
        console.log("error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Still working on this feature");
  };

  return (
    <>
      <div className={styles.postPage}>
        <h1>{title}</h1>
        <p>{content}</p>
        {checked ? (
          <Skeleton />
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <textarea
                style={{ padding: "16px", fontSize: "16px" }}
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <Button buttonText="Comment" />
          </form>
        )}
      </div>
    </>
  );
}

export default Postpage;
