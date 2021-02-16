import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login';
import SignUp from './SignUp';
import BlogPage from './BlogPage';
import Blog from './Blog';

const Home = (props) => {

    // gets setLoggedIn state from parent
    const setLoggedIn = props.setLoggedIn
    const loggedIn = props.loggedIn

  return (
    <div className="Home">
      <Router>
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

export default Home;
