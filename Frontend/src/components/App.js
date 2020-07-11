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
import BestPrice from '../views/BestPrice/BestPrice';

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
        <Route exact path="/best-price">
          <BestPrice />
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
