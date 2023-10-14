import { createContext, useContext, useState } from "react";
import { createRandomPost } from "./RandomPost";

const PostContext = createContext();



function PostProvider({ chidren }) {
    const [posts, setPosts] = useState(() =>
        Array.from({ length: 30 }, () => createRandomPost())
    );
    const [searchQuery, setSearchQuery] = useState("");

    // Derived state. These are the posts that will actually be displayed
    const searchedPosts =
        searchQuery.length > 0
            ? posts.filter((post) =>
                `${post.title} ${post.body}`
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            )
            : posts;

    function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
    }

    function handleClearPosts() {
        setPosts([]);
    }


    return (
        <PostContext.Provider value={{
            posts: searchedPosts,
            onAddPost: handleAddPost,
            onClearPosts: handleClearPosts,
            searchQuery,
            setSearchQuery,
        }}>
            {chidren}
        </PostContext.Provider>
    );
}

function usePost() {
    const context = useContext(PostContext);

    if (context === undefined)
        throw new Error("PostContext was used outside PostProvider");

    return context;
}

export { PostProvider, usePost };