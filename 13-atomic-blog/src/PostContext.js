import { createContext } from "react";

const PostContext = createContext();

function PostProvider({ chidren }) {
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

export { PostProvider };