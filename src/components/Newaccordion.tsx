import {useState} from "react";



type PropsNewAccordionType ={
    value: boolean
    openaccord: () => void
}

export function NewAccordion(props: PropsNewAccordionType) {

    return (
        <div>
            <AccordionTitle push={props.openaccord}  value={true} />
            { props.value && <AccordionItem/>}
        </div>
    )
}

type accordionPropsType = {
    push:  (value:boolean) => void
    value:true
}

function AccordionTitle(props:accordionPropsType) {
    return (
        <h3 onClick={ () =>  props.push(props.value)} >
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