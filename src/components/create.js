import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')
    const[author, setAuthor] = useState('')
    const Navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        fetch('http://localhost:3000/blogs', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            Navigate('/')
        })
        

    }


    
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <h1>Add a new Blog</h1>
                <label>Title:</label>
                <input type="text" value={title} onChange = {e => setTitle(e.target.value)} />
                <label >Body:</label>
                <textarea value={body} onChange = {e => setBody(e.target.value)} ></textarea>
                <label >Author</label>
                <input type="text" value={author} onChange = {e => setAuthor(e.target.value)} />
                <div>
                    <button>Add Blog</button>
                </div>
            </form>
        </div>
    );
}
 
export default Create;