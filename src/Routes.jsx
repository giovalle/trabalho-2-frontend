import React from "react";
import { Switch, Route } from "react-router-dom";
import { Persons, EditPerson, NewPerson } from "./pages";

/* route 1 = listagem
  route 2 = incluir
  route 3 = editar
*/
const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Persons />
    </Route>
    <Route exact path="/pessoas/novo">
      <NewPerson />
    </Route>
    <Route exact path="/pessoas/:id">
      <EditPerson />
    </Route>
  </Switch>
);

export default Routes;
