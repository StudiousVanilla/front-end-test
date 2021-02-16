import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import BlogPage from './components/BlogPage';
import Blog from './components/Blog';

function App() {

  const [loggedIn, setLoggedIn] = useState()

  return (
    <div className="Home">
      <Router>
        <Link to='/login'><p>test</p></Link>
        <Switch>
          <Route exact path='/login'>
            <Login loggedIn = {loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path='/signup' > <SignUp/> </Route>
          <Route exact path='/blogs' > <BlogPage /> </Route>
          <Route path='/blogs/1'> <Blog/> </Route>
        </Switch>
      </Router>
    </div>
  );
  }
 

export default App;
