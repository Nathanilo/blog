import Link from "next/link";
import Button from "../Button/Button";
import styles from "./ManagePostCard.module.css";
import { Post } from "@prisma/client";

interface PostProps {
  post: Post;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const ManagePostCard: React.FC<PostProps> = ({ post, posts, setPosts }) => {
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      const baseUrl = window.location.protocol + "//" + window.location.host;
      const apiUrl = `${baseUrl}/api/post`;
      await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      setPosts(posts.filter((post) => post.id !== id) as Post[]);
    }
  };
  return (
    <div className={styles.postContainer}>
      <p>{post.title}</p>
      <div>
        <Link href={`/edit/?id=${post.id}`}>
          <Button buttonText="Edit" />
        </Link>
        <Button buttonText="Delete" handleClick={() => handleDelete(post.id)} />
      </div>
    </div>
  );
};

export default ManagePostCard;
