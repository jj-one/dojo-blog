import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFount = () => {
  return (
    <div className="not-found">
      <h2>Sorry!</h2>
      <p>The page or content you u tried to reach doesn't seem to exist</p>
      <Link to="/">Go to Home Page...</Link>
    </div>
  );
}
 
export default NotFount;