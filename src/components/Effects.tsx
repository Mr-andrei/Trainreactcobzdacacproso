import {useEffect, useState} from "react";


export const Example = () => {

    let [date, setDate] = useState<Date>()

    useEffect(()=> {
        console.log('time')
        setInterval(()=> {
           setDate(new Date())
        },1000)
    },[])

    return (
        <>
            {date?.toLocaleTimeString()}
        </>
    )
}