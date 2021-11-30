import {oneCity} from "../App";
import {ChangeEvent, useState} from "react";


type selectPropsType = {
    myData: Array<oneCity>
    openCountruList: () => void
    valueCountry:boolean
    addContry: (title:string) => void
}

export const Select = ({myData, openCountruList, valueCountry,addContry}: selectPropsType) => {


    let [title, setTitle] = useState<string>("")

    let[newTitle, setNewTitle] = useState<string>("")

    const onChange = (e:ChangeEvent<HTMLInputElement> ) =>{
        setTitle(e.currentTarget.value)
    }

    const addCountry = () => {
        title &&
        addContry(title)
        setTitle("")
    }


    let Data = myData.map(m => {
            <div>{m.title}</div>

    })
    return (
        <div>
            <div>Your Country</div>
            <h3 onClick={openCountruList}>{newTitle}</h3>
            {valueCountry ? Data : "" }
            <button onClick={addCountry}>Add Country</button>
            <input type="text" onChange={onChange} value={title}/>


        </div>

    )
}