import React from 'react';
import StreamersAll from './streamers';
import StreamersOnline from './streamersonline';
import StreamersOffline from './streamersoffline';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const StreamersRouter = (props) => (
        <div className="streams">
            <BrowserRouter>
            <div className="router__container">
                <div className="nav__links">
                <NavLink  className="nav-link nav__link--all" activeClassName="is-active" to='/' exact={true}>All</NavLink>
                <NavLink  className="nav-link nav__link--online" activeClassName="is-active" to='/online'>Online</NavLink>
                <NavLink className="nav-link nav__link--offline"  activeClassName="is-active" to='/offline'>Offline</NavLink>
                </div>
                <Switch>
                    <Route
                        path="/" 
                        exact={true}
                        render={() => <StreamersAll {...props}/> } 
                    />
                    <Route
                        path="/offline"
                        render={() => <StreamersOffline {...props}/> } 
                        exact={true}
                    />
                    <Route
                        path="/online"
                        render={() => <StreamersOnline {...props}/> } 
                        exact={true}
                    />
                    </Switch>
                    
              </div>  
            </BrowserRouter>
        </div>
);

export default StreamersRouter;