const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to the Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">First Blog Post</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique nulla, ac finibus
              urna aliquet in. Sed nec lectus at mi facilisis accumsan.
            </p>
            <a href="#" className="text-blue-500 font-bold hover:text-blue-700">
              Read more
            </a>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Second Blog Post</h2>
            <p className="text-gray-600 mb-4">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi
              auctor ultricies risus, ut aliquet ex iaculis sit amet.
            </p>
            <a href="#" className="text-blue-500 font-bold hover:text-blue-700">
              Read more
            </a>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Third Blog Post</h2>
            <p className="text-gray-600 mb-4">
              Donec iaculis finibus justo a elementum. Phasellus quis elit id elit elementum scelerisque vitae
              at mi. Aenean euismod lorem mauris, vitae condimentum odio condimentum sit amet.
            </p>
            <a href="#" className="text-blue-500 font-bold hover:text-blue-700">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;