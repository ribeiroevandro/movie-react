import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';
import Movie from './pages/movie';

const Routes = () => (
    <BrowserRouter>
     <Header></Header>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/shows/:id" component={Movie}></Route>
        </Switch>
     <Footer></Footer>
    </BrowserRouter>
) 

export default Routes;