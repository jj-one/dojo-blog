import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ author, setAuthor ] = useState('');
  const [ isPending, setIsPending ] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    if (e){
      e.preventDefault();
    }
    const blog = {title, body, author};
    
    setIsPending(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
      })
      .then((res) =>{
        setIsPending(false);
        return res.json();
        // 
      })
      .then((data) => {
        // history.go(-1);
        // history.go("/");
        history.push(`/blogs/${data.id}`);
      });
    }, 1000);
  }

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
        <label>Blog body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {isPending && <button disabled>Submitting blog...</button>}
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
}
 
export default Create;