import {oneCity} from "../App";
import {ChangeEvent, useState} from "react";


type selectPropsType = {
    myData: Array<oneCity>
    openCountruList: () => void
    valueCountry:boolean

}

export const Select = ({myData, openCountruList, valueCountry}: selectPropsType) => {









    let Data = myData.map(f => {
        return( f.id === 2 ? <div>{f.title}</div> : "")})
    return (
        <div>
            {Data}
        </div>

    )
}