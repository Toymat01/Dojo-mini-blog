import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogDetails = () => {
    const Navigate = useNavigate()
    const handleDelete = () =>{
        fetch('http://localhost:3000/blogs/' + id,{
            method:'DELETE'
        }).then(() =>{
            Navigate('/')
        })
    }
    const {id} = useParams();
    const{data:blog, isPending, error} = UseFetch('http://localhost:3000/blogs/' + id)
    return (
        <div className="blog-details">
            {error && <div>{error} </div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <div className="blog-content">
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
                
        </div>
    );
}
 
export default BlogDetails;