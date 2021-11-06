import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MyPush} from './components/OnOff/OnOff'
import {Accordion} from "./components/accordion";
import {Rating} from "./components/Rating";
import {NewRating, ratingValueTupe} from "./components/NewRating";
import {NewAccordion} from "./components/Newaccordion";



function App() {

    const [star, setStart] = useState <ratingValueTupe>(4)
    const [accor, setAccor] = useState<boolean>(false)



  return (
    <div className="App">
        <MyPush />
        <Accordion/>
        <NewRating value={star} clickStar={setStart}/>
        <NewAccordion value={accor} openaccord={() => setAccor}/>
        {/*<Rating value={1} />*/}


    </div>
  );
}

export default App;
