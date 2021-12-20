import {useEffect, useState} from "react";


export const Example = () => {
    let [counter, setCounter ] = useState<number>(0)
    let [value, setValue ] = useState<number>(0)


    useEffect(()=> {
        console.log('effect')
        document.title=counter.toString()
    },[counter])


    return (
        <div>
            {counter}
            {value}
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>setValue(value+1)}>+v</button>

        </div>
    )
}