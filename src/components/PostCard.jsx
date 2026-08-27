import { Link } from "react-router-dom";

function PostCard({ post }) {
  const preview = post.content.length > 120 ? post.content.slice(0, 120) + "..." : post.content;

  return (
    <Link to={`/post/${post._id}`} className="block bg-white rounded-xl shadow hover:shadow-lg transition p-6 mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 text-sm mb-3">{preview}</p>
      <div className="flex justify-between text-xs text-gray-400">
        <span>By {post.author}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
    </Link>
  );
}

export default PostCard;
