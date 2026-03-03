import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import Post from "./components/Post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}

export default App;