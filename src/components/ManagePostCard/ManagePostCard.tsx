import Link from "next/link";
import Button from "../Button/Button";
import styles from "./ManagePostCard.module.css";
import { Post } from "@/data/post";

interface PostProps {
  post: {
    title: string;
    id: string;
    content: string;
    timestamp: string;
    author: string;
  };
  posts: Array<{ title: string; id: string }>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}


const ManagePostCard: React.FC<PostProps> = ({ post, posts, setPosts }) => {
const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
        "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
        console.log("delete", id);
        //TO DO: delete post with id from db
        setPosts(posts.filter((post) => post.id !== id) as Post[]);
    }
};
  return (
    <div className={styles.postContainer}>
      <p>{post.title}</p>
      <div>
        <Link href={`/edit/${post.id}`}>
          <Button buttonText="Edit" />
        </Link>
        <Button buttonText="Delete" handleClick={() => handleDelete(post.id)} />
      </div>
    </div>
  );
};

export default ManagePostCard;
