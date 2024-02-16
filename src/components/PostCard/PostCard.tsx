
import { Post } from "@prisma/client";
import styles from "./PostCard.module.css";

interface PostProps {
  post: Post;
  posts: Post[];
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
