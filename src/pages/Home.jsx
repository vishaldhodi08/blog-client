import { useEffect, useState } from "react";
import { getAllPosts } from "../api/postApi";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Latest Posts</h1>

      {loading && <p className="text-gray-400">Loading posts...</p>}

      {!loading && posts.length === 0 && <p className="text-gray-400">No posts yet. Create the first one!</p>}

      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Home;
