import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "../pages/Home";
import Todo from "../pages/Todo";


class Menu extends Component {
    render() {
        return (
            <Router>
                <div className="container center">
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item"><Link to={'/'} className="menu__link">Home</Link></li>
                            <li className="menu__list-item"><Link to={'/todo'} className="menu__link">To do</Link></li>
                            <li className="menu__list-item"><Link to={'examples'} className="menu__link">Examples</Link>
                            </li>
                            <li className="menu__list-item"><Link to={'resources'} className="menu__link">Resources</Link></li>
                            <li className="menu__list-item"><a className="menu__link" href="#">Game</a></li>
                            <li className="menu__list-item"><a className="menu__link" href="#">Feedback</a></li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/todo' component={Todo}/>
                </Switch>
            </Router>
        );
    }
}

export default Menu