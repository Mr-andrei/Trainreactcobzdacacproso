import React, {useState} from 'react';

import './App.css';
import {MyPush} from './components/OnOff/OnOff'
import {Accordion} from "./components/accordion";

import {NewRating, ratingValueTupe} from "./components/NewRating";
import {NewAccordion} from "./components/Newaccordion";
import {Input, InputRef} from "./components/input";
import Select from "./components/Select";





function App() {



    const [star, setStart] = useState<ratingValueTupe>(4)
    const [accor, setAccor] = useState<boolean>(false)


    return (
        <div className="App">
            <MyPush/>
            <Accordion/>
            <NewRating value={star} clickStar={setStart}/>
            <NewAccordion value={accor} openaccord={() => setAccor}/>
            <Input/>
            <InputRef/>
            <Select

            />
        </div>
    );
}

export default App;
