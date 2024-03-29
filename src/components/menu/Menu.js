import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "../pages/Home";
import TodoApp from "../pages/Todo";
import Examples from "../pages/Examples";
import Numbers from "../pages/Game";
import Resources from "../pages/Resources";
import Contact from "../pages/Contact";


class Menu extends Component {
    render() {
        return (
            <Router>
                <div className="container center">
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item"><Link to={'/'} className="menu__link">Home</Link></li>
                            <li className="menu__list-item"><Link to={'/todo'} className="menu__link">To do</Link></li>
                            <li className="menu__list-item"><Link to={'/examples'} className="menu__link">Examples</Link>
                            </li>
                            <li className="menu__list-item"><Link to={'/resources'} className="menu__link">Resources</Link></li>
                            <li className="menu__list-item"><Link to={'/game'} className="menu__link">Game</Link></li>
                            <li className="menu__list-item"><Link to={'/contact'} className="menu__link">Feedback</Link></li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/todo' component={TodoApp}/>
                    <Route exact path='/examples' component={Examples}/>
                    <Route exact path='/resources' component={Resources}/>
                    <Route exact path='/game' component={Numbers}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
            </Router>
        );
    }
}

export default Menu