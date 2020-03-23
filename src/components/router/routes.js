
import React from "react";
import { Switch, Route } from "react-router-dom";

import UserList from '../users/usersList'

const Routes= () => (
  <Switch>
      <Route path="/" exact component={UserList} />
      <Route path="/NewUser" render={() => <h1>New</h1>}/>
  </Switch>
)

export default Routes

