import React, { Component } from 'react';
import Menu from "./components/menu/Menu";

function App() {
    return (
        <div className="container">
            <Menu menu={Menu}>
            </Menu>
            <div id="root"></div>
        </div>


    );
}

export default App;
