import { Switch, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';
import { UserList } from '../pages/UsersList';
import { CreateUser } from '../pages/UsersList/CreateUser';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/users" exact component={UserList} />
      <Route path="/users/create" component={CreateUser} />
    </Switch>
  );
}