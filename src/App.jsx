import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import AllPosts from "./pages/AllPosts/AllPosts.jsx";
import NewPost from "./pages/NewPost/NewPost.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Post from "./pages/Blogpost/Blogpost.jsx";


function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alle-posts" element={<AllPosts/>} />
                <Route path="/nieuwe-post-maken" element={<NewPost />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/post/:id" element={<Post/>} />
            </Routes>
        </>
    )
}

export default App
