import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Login from './Login';
import SignUp from './SignUp';
import BlogPage from './BlogPage';
import Blog from './Blog';
import { useState } from 'react';

const Home = (props) => {

    // gets setLoggedIn state from parent
    const setLoggedIn = props.setLoggedIn
    const loggedIn = props.loggedIn

    console.log(loggedIn);

  return (
    <div className="Home">
      <Router>
        <Switch>
          <Route exact path='/login'>
            {loggedIn ? <Redirect to="/blogs" /> : <Login setLoggedIn={setLoggedIn} />}
          </Route>
          <Route exact path='/signup' > <SignUp/> </Route>
          <Route exact path='/blogs' > 
            {loggedIn ? <BlogPage /> : <Redirect to="/login" />}
          </Route>
          <Route path='/blogs/1'> <Blog/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
