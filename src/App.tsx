import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MyPush} from './components/OnOff/OnOff'
import {Accordion} from "./components/accordion";
import {Rating} from "./components/Rating";
import {NewRating, ratingValueTupe} from "./components/NewRating";
import {NewAccordion} from "./components/Newaccordion";
import {Input, InputRef} from "./components/input";
import {Select} from "./components/Select";


export type oneCity = {
    id: number
    title: string
}
type typeOfCountry = Array<oneCity>


function App() {




    const [myCountry, setmyCountry] = useState<Array<oneCity>>([
        {id: 2, title: "Minsk"},
        {id: 2, title: "Gomel"},
        {id: 2, title: "Mogelev"},
        {id: 1, title: "Kiev"},
        {id: 1, title: "Lviv"},
        {id: 1, title: "Odesa"},
        {id: 3, title: "Moscva"},
        {id: 3, title: "Piter"},
        {id: 3, title: "Tymen"},
    ])

    const [valueCountry, setValueCountry] = useState(false)

   const openCountruList =( ) => {
        setValueCountry(!valueCountry)
    }
    /*
    const addContry = (title:string) => {
        let newCountry = {id : 6, title: title}
        setmyCountry([newCountry, ...myCountry])

    }*/


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
                myData={myCountry}
                valueCountry={valueCountry}
                openCountruList={openCountruList}
            />
        </div>
    );
}

export default App;
