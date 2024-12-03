import { useGetPostQuery } from "../features/api/apiSlice";
import EditPost from "./EditPost";

export default function Post({ id }) {
    const { data: post, isLoading, isError } = useGetPostQuery(id);

    let content = null;
    if (isLoading) {
        content = <h1>Loading post...</h1>;
    }

    if (!isLoading && isError) {
        content = <h1>There was an error occured!</h1>;
    }

    if (!isLoading && !isError && post?.id) {
        content = <p>{post.title}</p>;
    }

    return (
        <div className="w-full p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {content}
            {post?.title && <EditPost post={post} />}
        </div>
    );
}
