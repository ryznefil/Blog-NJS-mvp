export default function NavPane() {
    return (
      <div className="fixed top-4 right-4 bg-gray-200 p-4 rounded-md shadow-md">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
        </ul>
      </div>
    );
  }