import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          📝 My Blog
        </Link>
        <Link
          to="/create"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 transition"
        >
          + New Post
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
