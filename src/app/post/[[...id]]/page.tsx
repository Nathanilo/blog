'use client'
import Link from 'next/link';

import { postsData } from "@/data/post";
import { useState } from 'react';

function PostPage({ params }) {
  const [posts, setPosts] = useState(postsData);

  return (
    <>
      <div>
        <button>
          List View
        </button>
        <button>
          Grid View
        </button>
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div>
        <h1>Post page {params.id}</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div>
                {post.title}
                <Link href={`/post/${post.id}`}>
                  See more...
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PostPage;