import React from 'react';
import './App.css';
import Slider from "./components/Slider";
import Selector from "./components/Selector";
import Circle from "./components/Circle";

function App() {

    return (
        <div className='mainPlace'>
                <Circle></Circle>
            <Selector></Selector>
                <Slider></Slider>

        </div>
    );
}

export default App;
