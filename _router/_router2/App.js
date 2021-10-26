import { Link, Route, Switch } from "react-router-dom";
import Home from "./route/Home";
import Profiles from "./route/profiles/Profiles";
import History from "./route/History";
import Details from "./route/details/Details";

const App = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/details">Detail</Link>
        <br />
        <Link to="/profiles">Profile</Link>
        <br />
        <Link to="/history">History Example</Link>
        <br />
        <hr />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={History} />
        <Route
          render={({ location }) => (
            <>
              <h2>Not Found : </h2>
              <p>{location.pathname}</p>
            </>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
