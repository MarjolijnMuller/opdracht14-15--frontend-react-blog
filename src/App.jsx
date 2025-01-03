import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import AllPosts from "./pages/AllPosts/AllPosts.jsx";
import NewPost from "./pages/NewPost/NewPost.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alle-posts" element={<AllPosts/>} />
                <Route path="/nieuwe-post-maken" element={<NewPost />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
