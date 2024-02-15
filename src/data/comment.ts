import {v4 as uuidv4} from 'uuid';
import { postsData } from './post';

export interface Comment {
    id: string;
    postId: string;
    content: string;
    timestamp: string;
    user: string;
}

export const commentsData: Comment[] = [
    {
        id: uuidv4(),
        postId: postsData[0].id,
        content: "This is the first comment",
        timestamp: "2021-01-01T00:00:00Z",
        user: "John Doe",
    },
    {
        id: uuidv4(),
        postId: postsData[0].id,
        content: "This is the second comment",
        timestamp: "2021-01-02T00:00:00Z",
        user: "John Doe",
    },
    {
        id: uuidv4(),
        postId: postsData[1].id,
        content: "This is the third comment",
        timestamp: "2021-01-01T00:00:00Z",
        user: "John Doe",
    },
    {
        id: uuidv4(),
        postId: postsData[2].id,
        content: "This is the fourth comment",
        timestamp: "2021-01-01T00:00:00Z",
        user: "John Doe",
    },
    {
        id: uuidv4(),
        postId: postsData[2].id,
        content: "This is the fifth comment",
        timestamp: "2021-01-01T00:00:00Z",
        user: "John Doe",
    },
]