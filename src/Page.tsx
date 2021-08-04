import * as React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';

import Recoil from 'components/recoil/Recoil';
import Netflix from 'components/netflix/Netflix.js';
import Main from './components/Main';
import Todos from './components/todos/Todos';

const Page: React.FC = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/todos" component={Todos} />
            <Route path="/recoil" component={Recoil} />
            <Route path="/netflix" component={Netflix} />
        </Switch>
    </Router>
);

export default Page;
