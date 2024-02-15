import { Post } from "@/data/post";
import styles from "./PostCard.module.css";

interface PostProps {
  post: {
    title: string;
    id: string;
    content: string;
    timestamp: string;
    author: string;
  };
  posts: Array<{ title: string; id: string }>;
  //   setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.postcardContainer}>
      <p>
        {post.title}
        <br />
        <span> by {post.author}</span>
      </p>
    </div>
  );
};

export default PostCard;
