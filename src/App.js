import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import RutaPrivada from './components/RutaPrivada';
import Login from './containers/Login';
import Home from './containers/Home';
import UserProfile from './containers/UserProfile';

import store from './store';

function App() {
    return (
        <Router>
            <Provider store={store}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <RutaPrivada exact path="/home" component={Home} />
                        <RutaPrivada exact path="/user/:id" component={UserProfile} />
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
