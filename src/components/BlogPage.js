import {useEffect} from 'react'

const BlogPage = () => {

    useEffect(()=>{

        const fetchData = async () =>{
            try {
                fetch('https://oisin-mern-blog.herokuapp.com/blogs',{
                    headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
                })
                // takes response and parses it into (returns a promise)
                .then((response)=>{
                   return response.json()
                })
                // logs data returnd from json parsing promise above
                .then((data)=>{
                    console.log(data.map(data => data.title));
                })      
            } catch (error) {
                console.log(error);
            }
        }

        fetchData()
        
    })


    return (

        <div>
            poop
        </div>

     );
}
 
export default BlogPage;