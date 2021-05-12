import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFound from "./page/notFound";
import ContainedButtons from "./material-ui/myButton";
import ContainedButtonsHome from "./material-ui/myButtonHome";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/home"
            render={() => {
              return localStorage.getItem("email") !== null &&
                localStorage.getItem("user") !== null &&
                localStorage.getItem("pass") !== null ? (
                <ContainedButtonsHome />
              ) : (
                <Redirect to="/login"></Redirect>
              );
            }}
          ></Route>
          <Route
            exact
            path="/"
            render={() => {
              return localStorage.getItem("email") !== null &&
                localStorage.getItem("user") !== null &&
                localStorage.getItem("pass") !== null ? (
                <ContainedButtonsHome />
              ) : (
                <Redirect to="/login"></Redirect>
              );
            }}
          ></Route>

          <Route
            path="/login"
            render={() => {
              return localStorage.getItem("email") !== null &&
                localStorage.getItem("user") !== null &&
                localStorage.getItem("pass") !== null ? (
                <Redirect to="/home"></Redirect>
              ) : (
                <ContainedButtons />
              );
            }}
          ></Route>

          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
