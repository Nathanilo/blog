import {v4 as uuidv4} from 'uuid';

export interface Post {
    id: string;
    title: string;
    content: string;
    timestamp: string;
    author: string;
}

export let postsData: Post[] = [
    {
        id: uuidv4(),
        title: "First Post",
        content: "This is the first post",
        timestamp: "2021-01-01T00:00:00Z",
        author: "John Doe",
    },
    {
        id: uuidv4(),
        title: "Second Post",
        content: "This is the second post",
        timestamp: "2021-01-02T00:00:00Z",
        author: "John Doe",
    },
    {
        id: uuidv4(),
        title: "Third Post",
        content: "This is the third post",
        timestamp: "2021-01-01T00:00:00Z",
        author: "John Doe",
    }
];