import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Videos from './components/Videos/Videos';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Signup from './components/Signup/Signup';
import { Toaster } from 'react-hot-toast';

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([])
  return (
    <BlogContext.Provider value = {[blogs, setBlogs]}>
    <Navbar></Navbar>
    <Toaster/>
    <Routes>
      <Route path = '/' element= {<Home></Home>}></Route>
      <Route path = '/login' element = {<Login></Login>}></Route>
      <Route path = '/videos' element = {<Videos></Videos>}></Route>
      <Route path = '/blog/:id' element = {<BlogDetails></BlogDetails>}></Route>
      <Route path = '/signup' element={<Signup></Signup>}></Route>
      <Route path = '*' element = {<NotFound></NotFound>}></Route>
    </Routes>
    </BlogContext.Provider>
  );
}

export default App;
