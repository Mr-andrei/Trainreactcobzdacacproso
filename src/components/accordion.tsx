import {useState} from "react";


export function Accordion() {

    let [skuk, stetSkuk] = useState(false)
    const pushAccordion = () => {stetSkuk (!skuk)}




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