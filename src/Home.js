import useFetch from './useFetch';
import BlogList from './BlogList';

const Home = () => {

  const { data: blogs, isPending, fetchErr } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {fetchErr && <div>{fetchErr}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;