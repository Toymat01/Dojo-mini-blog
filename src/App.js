import Home from "./components/Home";
import Create from "./components/create";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path="/create" element ={<Create />} />
            <Route path="/blogs/:id" element = {<BlogDetails />} />
          </Routes>
        </div>
    </Router>
   
  );
}
export default App;
