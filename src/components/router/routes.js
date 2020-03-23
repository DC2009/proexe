
import React from "react";
import { Switch, Route } from "react-router-dom";

import UserList from '../users/usersList'
import UserForm from '../users/userForm'

const Routes= () => (
  <Switch>
      <Route path="/" exact component={UserList} />
      <Route path="/NewUser" component={UserForm}/>
      <Route path="/EditUser/:id" component={UserForm}/>
  </Switch>
)

export default Routes

