import {useState} from "react";


type MyPushPropsType = {

}

 export const MyPush = (props: MyPushPropsType) => {

    let [on, setOn] = useState(false);

    let buttOn = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        margin: '20px',
        backgroundColor: on ? 'green' : 'white',
        display:  'inline-block',
    }
    let buttOff = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        margin: '20px',
        backgroundColor: on ?  'white' : 'red',
        display: 'inline-block'
    }
    let cirkul ={
        width: '30px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '20px',
        marginTop: '20px',
        backgroundColor: on ? 'green' : 'red',
        display: 'inline-block',

    }

    return (
        <div>
            <button onClick={() => {setOn(true)}} style={buttOn} >push</button>
            <button onClick={ () => {setOn(false)}} style={buttOff}>push</button>
            <div    style={cirkul}></div>
        </div>
    )
}