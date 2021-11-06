import {ChangeEvent, ChangeEventHandler, useRef, useState} from "react";


export const Input = () => {
    const [value, setValue] = useState("yo")
    const addValue = () => {

    }

    const onChange = (e: ChangeEvent<HTMLInputElement>)=>  {
        const action = e.currentTarget.value
    setValue(action)}

    return (
        <div>
        <input onChange={onChange}/>
            <span></span>
            <button onClick={addValue }>push</button>
        </div>


    )
}


export const InputRef = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const push = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return(
        <div>
            <input ref={inputRef} type="text"/>
            <span>{value}</span>
            <button onClick={push}>push</button>
        </div>
    )
}