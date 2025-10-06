import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import BlogPosts from "./pages/Blog/BlogPosts";
import BlogDetails from "./pages/Blog/BlogDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Resgister";
import AdminLayout from "./AdminPanel/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AddPost from "./pages/Admin/AddPost";
import Users from "./pages/Admin/Users";
import AllPosts from "./pages/Admin/AllPosts";
import BlogLayout from "./BlogsPanel/BlogLayout";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="service" element={<Service />} />
        <Route path="servicedetails" element={<ServiceDetails />} />
     

        <Route path= "blog" element={<BlogLayout />}>
          <Route index element={<BlogPosts />} />
          <Route path="blogdetails/:id" element={<BlogDetails />} />
          
        </Route>
        
        
        <Route path="contact" element={<Contact />} />


        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="addpost" element={<AddPost />} />
          <Route path="users" element={<Users />} />
          <Route path="allposts" element={<AllPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
