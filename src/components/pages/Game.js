import React from 'react';
import ReactDOM from 'react-dom';

export default class Numbers extends React.Component {
    constructor(props) {
        super(props);
        let _ans = parseInt(Math.random() * 100 + 1, 10);

        this.state = {
            min: 0,
            max: 100,
            ans: _ans,
            input: undefined
        };
    }

    GameOver() {
        alert("You won!");

        let _ans = parseInt(Math.random() * 100 + 1, 10);
        this.setState({
            min: 0,
            max: 100,
            ans: _ans,
            input: ""
        });
    }

    Register() {
        let input = parseInt(this.state.input, 10);
        if (
            !this.state.input ||
            input >= this.state.max ||
            input <= this.state.min
        ) {
            alert("Input is not in range");
            return;
        }
        this.setState({ input: "" });

        if (this.state.ans === input) {
            this.GameOver();
            return;
        }
        if (this.state.ans < input) {
            this.setState({ max: input });
            return;
        }
        if (this.state.ans > input) {
            this.setState({ min: input });
            return;
        }
    }

    input = React.createRef();

    render() {
        return (
            <div className="Numbers main-body pr-3 pl-3 pt-3 shadow">
                <div className="display-3 text-light text-center mb-3">Numbers game</div>
                <div id="min" className="block">
                    <div className="blockContainer">
                        <div className="shower bg-info text-light text-center">{this.state.min}</div>
                    </div>
                </div>
                <div id="middle" className="block">
                    <div className="blockContainer bg-light">
                        <div className="center">
                            <div className="realInput mt-2">
                                <label htmlFor="ans">Enter a number between 1-100</label>
                                <br />
                                <input
                                    name="ans"
                                    type="text"
                                    value={this.state.input}
                                    onInput={e => this.setState({ input: e.target.value })}
                                />
                            </div>

                        </div>
                        <div className="col text-center mt-2 pb-2">
                        <div className="btn btn-primary" onClick={() => this.Register()}>
                            <span className="btn-text">Enter</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="max" className="block">
                    <div className="blockContainer">
                        <div className="shower bg-danger text-light text-center">{this.state.max}</div>
                    </div>
                </div>
            </div>
        );
    }
}
