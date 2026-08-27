import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPostById, deletePost } from "../api/postApi";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    try {
      await deletePost(id);
      navigate("/");
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  if (loading) {
    return <p className="text-center py-20 text-gray-400">Loading post...</p>;
  }

  if (!post) {
    return <p className="text-center py-20 text-gray-400">Post not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/" className="text-indigo-500 font-medium hover:underline">
        Back to all posts
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">{post.title}</h1>
      <div className="flex justify-between text-sm text-gray-400 mb-6">
        <span>By {post.author}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>

      <button
        onClick={handleDelete}
        className="mt-8 bg-red-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-600 transition"
      >
        Delete Post
      </button>
    </div>
  );
}

export default PostDetail;
