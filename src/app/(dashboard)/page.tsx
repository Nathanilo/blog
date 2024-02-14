'use client'

import { postsData } from '../../data/post';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState(postsData);

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      console.log('delete', id)
      //TO DO: delete post with id from db
      setPosts(posts.filter(post => post.id !== id));
    }
  };
  return (
    <>
      <div>
        <form>
          <input type="text" placeholder="Search" />
        </form>

        <Link href='/create'>
          <button>
            Create Post
          </button>
        </Link>

      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div>
              {post.title}
              <Link href={`/edit/${post.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
