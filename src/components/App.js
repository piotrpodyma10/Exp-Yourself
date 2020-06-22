import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from '../views/Login/Login';
import MyProfile from '../views/MyProfile/MyProfile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/my-profile">
          <MyProfile />
        </Route>
        {/* <Route path="*">
          <div>
            DUPA 5
          </div>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
