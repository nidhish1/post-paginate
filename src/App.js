import logo from './logo.svg';
import React, {useState,  useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Pagination from './components/Pagination'
import Posts from './components/Posts'

const App =() => {
  const [posts, setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage , setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async() => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPost()
  },[])
  
  const indexOfLastPost = currentPage*postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost , indexOfLastPost)


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className='container' mt-5> 
      <h1> sdfsd</h1>
      <Posts posts = {currentPost} loading = {loading} />
      <Pagination postsPerPage = {postPerPage} totalPost = {posts.length} paginate = {paginate} />
    </div>
  )

}




export default App;
