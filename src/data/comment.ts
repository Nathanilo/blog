import {v4 as uuidv4} from 'uuidv4';
import { posts } from './post';

export interface Comment {
    id: string;
    postId: string;
    content: string;
    timestamp: string;
    user: string;
}

export let commentsData: Comment[] = [
    {
        id: uuidv4(),
        postId: posts[0].id,
        content: "This is the first comment",
        timestamp: "2021-01-01T00:00:00Z",
        user: "John Doe",
    },
    {
        id: uuidv4(),
        postId: posts[0].id,
        content: "This is the second comment",
        timestamp: "2021-01-02T00:00:00Z",
        user: "John Doe",
    },
    {
        id: uuidv4(),
        postId: posts[1].id,
        content: "This is the third comment",
        timestamp: "2021-01-01T00:00:00Z",
        user: "John Doe",
    },
    {
        id: uuidv4(),
        postId: posts[2].id,
        content: "This is the fourth comment",
        timestamp: "2021-01-01T00:00:00Z",
        user: "John Doe",
    },
    {
        id: uuidv4(),
        postId: posts[2].id,
        content: "This is the fifth comment",
        timestamp: "2021-01-01T00:00:00Z",
        user: "John Doe",
    },
]