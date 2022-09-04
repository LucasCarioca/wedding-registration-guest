import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Search from './components/Search/Search';
import InvitationPage from './components/InvitationPage/InvitationPage';
import GuestPage from './components/GuestPage/GuestPage';
import Home from './components/Home/Home';
import NavBar from './components/Home/NavBar';


function Routes() {
  return (
    <Switch>
      <Route path="/invitations/:key/guests">
        <GuestPage/>
      </Route>
      <Route path="/invitations/:key">
        <InvitationPage/>
      </Route>
      <Route path="/invitations">
        <InvitationPage/>
      </Route>
      <Route path="/search">
        <Search/>
      </Route>
      <Route path="/">
        <Home><NavBar/></Home>
      </Route>
    </Switch>
  );
}

export default Routes;
