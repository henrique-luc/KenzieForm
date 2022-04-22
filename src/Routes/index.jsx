import Home from "../Components/Pages/Home";
import Welcome from "../Components/Pages/Welcome";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/welcome/:id"}>
        <Welcome />
      </Route>
    </Switch>
  );
}
