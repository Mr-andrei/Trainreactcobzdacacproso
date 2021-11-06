import {useState} from "react";

type valuePropsType ={
    value:number
}

export function Rating (props: valuePropsType) {

    let [starOn, setStarOn] = useState(0)

   /* const clickStar = ()=> setStarOn(0)*/



    return (
        <div>

            <Star selected = {starOn > 0}  clickStar={setStarOn}  value ={1} />
            <Star selected = {starOn > 1}  clickStar={setStarOn}  value ={2} />
            <Star selected = {starOn > 2}  clickStar={setStarOn}  value ={3} />
            <Star selected = {starOn > 3}  clickStar={setStarOn}  value ={4} />
            <Star selected = {starOn > 4}  clickStar={setStarOn}  value ={5} />

        </div>
    )
}

type selectedPropsType ={
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    clickStar: (value: 1 | 2 | 3 | 4 | 5 )=> void
}

function Star(props: selectedPropsType) {
    return(
        <div>
            <span onClick={() => props.clickStar(props.value)}>
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
