import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Home extends Component {
    render() {
        return (
            <div className="container center">
                <div className="w-75">
                    <Form className="bg-light shadow p-3">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" required placeholder="Enter your first name"/>
                        </Form.Group>
                        <Form.Group controlId="formBasiclname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" required placeholder="Enter your last name"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" required pattern="[^ @]*@[^ @]*" placeholder="Enter your email"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control className="text-top" style={{height: 100}} type="text" required
                                          placeholder="Write feedback here"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Home