import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';


const Root = function () { // are we supposed to have this in a separate function component file? 
    return <div>
        <Clock />
    </div>
};


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
});
