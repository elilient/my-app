import React, {Component} from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";


class Examples extends Component {
    render() {
        return (
            <div className="container center">
                <div className="text-center main-body pl-3 pr-3">
                    <div className="display-3 mt-3 text-light">Examples</div>
                    <div className="mt-3">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        To Do List
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body><div>This is a good example on how to implement a Todo list.</div>
                                        <a href="https://codepen.io/marekdano/pen/bVNYpq">CodePen link</a></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        Basic Card Example
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body><div>This is a basic card example</div>
                                        <a href="https://codepen.io/elilient/pen/aboQGRE">CodePen link</a></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        Number Generator
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body><div>This is a random number generator example</div>
                                        <a href="https://codepen.io/elilient/pen/OJLaZoe">CodePen link</a></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                        Basic Form Example
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body><div>This is a beginner's example on basic forms.</div>
                                        <a href="https://codesandbox.io/s/715l1krk4x">CodePen link</a></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                        Number Guessing Game
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body><div>Code for the number guessing game</div><a href="https://codesandbox.io/s/pw1xz2w9qm">CodePen Link</a></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>

                </div>
            </div>
        );
    }
}

export default Examples