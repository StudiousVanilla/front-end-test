import { useState } from "react"


const Login = (props) => {

    // gets setLoggedIn state from parent
    const setLoggedIn = props.setLoggedIn

    // creates email and password states to create a user object
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // creates a user based on form inputs
    const createUserDetails = () =>{
        let user = {
            'email': email,
            'password': password
        }

        return user
    }
    
    // sends a post request to try and login user
    const postData = async (user) => {
        
        try {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(user)
            })
            .then(response =>  {
                console.log(response);
                return response.json()
            })
            // if there are erros they are logged to the console
            .then((data) => {

                if(data.error !== undefined){
                    console.log(data.error);
                }
                else{
                    console.log(data);
                    // if there are no errors, loggIn state changes and user is redirected to blogs page
                    setLoggedIn(true);
                }
            })
        } catch (error) {
            console.log(error);
        }

    }

    // function triggers when form is submitted
    const handleSubmit = (e) =>{
        e.preventDefault()
        // creates user from state
        let user = createUserDetails()
        // posts data
        postData(user)
    }
    
    
    
    return ( 
        <main>
            <div className="form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="login-label">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    className="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label htmlFor="password" className="login-label">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    className="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className="form-button">Login</button>
                </form>
            </div>
        </main>
     );
}
    
export default Login;