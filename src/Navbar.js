import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        {/* <a href="/">Home</a>
        <a href="/create">Create Blog</a> */}
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;