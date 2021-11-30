import {useReducer, useState} from "react";


export function Accordion() {

    //let [skuk, stetSkuk] = useState(false)

    type ActionType ={
        type: "TOGGEL-STATE"
    }

     let reducer = (state:boolean, action:ActionType) => {
        if(action.type === "TOGGEL-STATE" ) {
            return !state
        }
        return state
     }

    let [skuk, dispatch] = useReducer(reducer, false)

    const pushAccordion = () => {dispatch({type:"TOGGEL-STATE"})}




    return (
        <div>
            <AccordionTitle push={pushAccordion} />
            { skuk && <AccordionItem/>}
        </div>
    )
}

type accordionPropsType = {
    push:  () => void
}

function AccordionTitle(props:accordionPropsType) {
    return (
        <h3 onClick={() => {props.push()}}>
            User
        </h3>
    )
}

function AccordionItem() {
    return (
        <div>
            <ul>
                <li>112</li>
                <li>123</li>
                <li>1234</li>
            </ul>
        </div>
    )
}