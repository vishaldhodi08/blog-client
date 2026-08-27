import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/postApi";

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setSubmitting(true);
    try {
      const newPost = await createPost({
        title,
        content,
        author: author.trim() || "Anonymous",
      });
      navigate(`/post/${newPost._id}`);
    } catch (err) {
      console.error("Failed to create post:", err);
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Post</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name (optional)"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
          rows={10}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-indigo-500 text-white py-3 rounded-lg font-medium hover:bg-indigo-600 transition disabled:opacity-50"
        >
          {submitting ? "Publishing..." : "Publish Post"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
