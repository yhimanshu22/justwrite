import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from "./pages/Blogs";
import { Publish } from './pages/Publish';
import { HomePage } from './pages/HomePage';
import NotificationContainer from './components/Notification';
import { React } from './tags/React';
import { JavaScript } from './tags/JavaScript';
import { Nodejs } from './tags/Nodejs';
import { Devops } from './tags/Devops';
import { MachineLearning } from './tags/MachineLearning';
import { AWS } from './tags/AWS';
import { Cloudflare } from './tags/Cloudflare';
import UpdateBlogPage from './pages/UpdateBlog';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/tags/React" element={<React />} />
          <Route path="/tags/JavaScript" element={<JavaScript />} />
          <Route path="/tags/MachineLearning" element={<MachineLearning />} />
          <Route path="/tags/Devops" element={<Devops />} />
          <Route path="/tags/Node.js" element={<Nodejs />} />
          <Route path="/tags/AWS" element={<AWS />} />
          <Route path="/tags/Cloudflare" element={<Cloudflare />} />
          <Route path="/blog/update/:id" element={<UpdateBlogPage />} />

        </Routes>
        <NotificationContainer />
      </BrowserRouter>
    </>
  )
}

export default App