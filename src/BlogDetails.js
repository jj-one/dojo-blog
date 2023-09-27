import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, isPending, fetchErr } = useFetch(`http://localhost:8000/blogs/${id}`);
  const [ isPendingHere, setIsPendingHere ] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    setIsPendingHere(true);
    setTimeout(() => {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      })
      .then(() =>{
        setIsPendingHere(false);
        history.push("/"); 
      });
    }, 1000);
  }

  return (
    <div className="blog-details">
    {isPending && <div>Loading...</div>}
    {fetchErr && <div>{fetchErr}</div>}
    {blog && 
      <article>
        <h2>{blog.title}</h2>
        <p>Created by <small>{blog.author}</small></p>
        <div>{blog.body}</div>
        {!isPendingHere && <button onClick={handleClick}>Delete</button>}
        {isPendingHere && <button disabled>Deleting {blog.title}...</button>}
      </article> 
    }
    </div>
  );
}
 
export default BlogDetails;