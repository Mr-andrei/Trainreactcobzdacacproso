import {oneCity} from "../App";
import {ChangeEvent, useState} from "react";


type selectPropsType = {
    myData: Array<oneCity>
    openCountruList: () => void
    valueCountry:boolean
    addContry: (title:string) => void
}

export const Select = ({myData, openCountruList, valueCountry,addContry}: selectPropsType) => {


    let [title, setTitle] = useState("")

    const onChange = (e:ChangeEvent<HTMLInputElement> ) =>{
        setTitle(e.currentTarget.value)
    }

    const addCountry = () => {
        addContry(title)
    }

    let Data = myData.map(m => {
        return (
            <div>{m.title}</div>
        )
    })
    return (
        <div>
            <div>Your Country</div>
            <button onClick={openCountruList}>Your Country</button>
            {valueCountry ? Data : "" }
            <button onClick={addCountry}>Add Country</button>
            <input type="text" onChange={onChange}/>


        </div>

    )
}