import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Home />
  


  },


  { path: "about", element: <About /> },
  { path: "service", element: <Service />  },
  { path: "servicedetails", element: <ServiceDetails /> },
  { path: "blog", element: <Blog /> },
  { path: "blogdetails", element: <BlogDetails /> },
  { path: "contact", element: <Contact /> }
]);

const App = () => {
  return <RouterProvider router={router} />
  
  // return <h1> helloo app.jsx</h1>
}

export default App;
