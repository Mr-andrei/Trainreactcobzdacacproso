import {useState} from "react";

export type ratingValueTupe =   1 | 2 | 3 | 4 | 5


type valuePropsType ={
    value: ratingValueTupe
    clickStar: (value :ratingValueTupe) => void
}

export function NewRating (props: valuePropsType) {

    return (
        <div>

            <Star selected = {props.value > 0}  clickStar={props.clickStar} value={1}/>
            <Star selected = {props.value > 1}  clickStar={props.clickStar} value={2}/>
            <Star selected = {props.value > 2}  clickStar={props.clickStar} value={3}/>
            <Star selected = {props.value > 3}  clickStar={props.clickStar} value={4}/>
            <Star selected = {props.value > 4}  clickStar={props.clickStar} value={5}/>

        </div>
    )
}

type selectedPropsType ={
    selected: boolean
    clickStar: (value :ratingValueTupe) => void
    value: ratingValueTupe
    /*clickStar: (value: 1 | 2 | 3 | 4 | 5 )=> void*/
}

function Star(props: selectedPropsType) {
    return(
        <div>
            <span onClick={()=> {props.clickStar(props.value)} }>
                {props.selected ?  <b>star</b> : "star"} </span>
        </div>
    )
}


/*
  const renderStar = () => {
    if (props.selected === true){
        <div>  star </div>
    }else  {
        <div> star </div>
    }}

    return (
        <div>{ renderStar }</div>
    )
}*/
