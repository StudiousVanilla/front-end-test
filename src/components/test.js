import { useEffect } from "react";

const TestComponent = () => {

    // fires before component is mounted
    useEffect( () =>{

        // async function that fetches data from backend
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
                    console.log(` .then data -> ${data.place}`);
                })      
            } catch (error) {
                console.log(error);
            }
        }
        /// calls fetchData function
        fetchData()
        /// Try with async await****

        const user = {
            "name": "admin user",
            "email": "frontendemailtest1@test.com",
            "password": "12345678"
        }

        const postData = async () => {
            fetch('https://oisin-mern-blog.herokuapp.com/signup', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
            })
        }

        postData()




    })


    return ( 
        <div>
            <p>hello</p>
        </div>
     );
}
 
export default TestComponent;