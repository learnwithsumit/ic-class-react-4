import { useState } from "react";
import { useGetPostsQuery } from "../features/api/apiSlice";
import Post from "./Post";

export default function Posts() {
    const { data: posts, isLoading, isError, error } = useGetPostsQuery();

    const [currentPostID, setCurrentPostID] = useState(null);

    // decide what to render
    let content;

    if (isLoading) {
        content = <h1>Loading posts...</h1>;
    }
    if (!isLoading && isError) {
        content = <h1 className="text-red-500">There was an error: {error}</h1>;
    }

    if (!isLoading && !isError) {
        if (posts.length > 0) {
            content = (
                <ul>
                    {posts.map((post) => (
                        <li
                            style={{
                                listStyleType: "square",
                            }}
                            key={post.id}
                        >
                            <a
                                href="#"
                                onClick={() => setCurrentPostID(post.id)}
                            >
                                {post.title}
                            </a>
                        </li>
                    ))}
                </ul>
            );
        } else {
            content = <h1>No posts found!</h1>;
        }
    }

    return (
        <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {content}
            {currentPostID && <Post id={currentPostID} />}
        </div>
    );
}
