import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './steams/StreamCreate';
import StreamEdit from './steams/StreamEdit';
import StreamDelete from './steams/StreamDelete';
import StreamList from './steams/StreamList';
import StreamShow from './steams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;