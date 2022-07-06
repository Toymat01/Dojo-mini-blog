
import BlogList from "./BlogList";
import UseFetch from "./useFetch";

const Home = () => {
    const {data:blogs, error, isPending} = UseFetch('http://localhost:3000/blogs')

 
    return (  
        <div className="home">
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
           { blogs && <BlogList blogs= {blogs} title = {"All Blogs!"}/> }
        </div>
    );
}
 
export default Home;