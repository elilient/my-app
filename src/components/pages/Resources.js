import React, {Component} from 'react';
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

class Resources extends Component {
    render() {
        return (
            <div className="container center">
                <div className="text-center main-body shadow pl-3 pr-3">
                    <div className="display-3 mt-3 mb-3 text-light">Resources</div>
                    <CardGroup className="shadow">
                        <Card>
                            <Card.Body>
                                <Card.Title>React 2019: React, Redux, React-Router, Hooks and Auth0</Card.Title>
                                <Card.Text>
                                    Other courses have made partial updates to older techniques and code, but this
                                    course is built from the ground up to include the most latest code and techniques
                                    from 2019+. You are getting the complete integrated modern techniques and code for
                                    React and Redux that are used in development today.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">4h 30min</small><br/>
                                <small className="text-muted"><a
                                    href="https://www.udemy.com/course/modern-react/learn/lecture/13926110">Link</a></small>
                            </Card.Footer>

                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>React Bootstrap</Card.Title>
                                <Card.Text>
                                    React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built
                                    from scratch as a true React component, without unneeded dependencies like jQuery.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"></small><br/>
                                <small className="text-muted"><a
                                    href="https://react-bootstrap.netlify.com/">Link</a></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>React Tutorial - Learn React - React Crash Course [2019]</Card.Title>
                                <Card.Text>
                                    In depth react tutorial.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">2h 25min</small><br/>
                                <small className="text-muted"><a
                                    href="https://www.youtube.com/watch?v=Ke90Tje7VS0">Link</a></small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    <CardGroup className="shadow">
                        <Card>
                            <Card.Body>
                                <Card.Title>Learn ReactJS: Part I</Card.Title>
                                <Card.Text>
                                    You’ll develop a strong understanding of React’s most essential concepts: JSX,
                                    components, and storing information via props and state. You’ll be able to combine
                                    these ideas in React’s modular programming style.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">7 Hours</small><br/>
                                <small className="text-muted"><a
                                    href="https://www.codecademy.com/learn/react-101">Link</a></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Using APIs in React - Create a Weather Application - Part 1 | React tutorial
                                    for Beginners</Card.Title>
                                <Card.Text>
                                    In this tutorial, we'll create a React application that's going to fetch data from a weather API.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">1h 11min</small><br/>
                                <small className="text-muted"><a
                                    href="https://www.youtube.com/watch?v=204C9yNeOYI">Link</a></small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>

                </div>
            </div>
        );
    }
}

export default Resources