import {useEffect, useState} from 'react'

const BlogPage = () => {

    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const fetchData = async () =>{
            try {
                fetch('https://oisin-mern-blog.herokuapp.com/blogs',{
                    headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    },
                    credentials: "include",
                })
                // takes response and parses it into (returns a promise)
                .then((response)=>{
                   return response.json()
                })
                // logs data returnd from json parsing promise above
                .then((data)=>{
                    setBlogs(data);
                    setLoading(false)
                })      
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    })


    return (

        <div className='blogs-conatainer'>
            {loading && <div>Loading...</div>}
            {blogs && <div>blogs</div>}
        </div>

     );
}
 
export default BlogPage;