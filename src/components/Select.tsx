
import {useState} from "react";


// type poropstype ={
//     newCountry:Array<oneCity>
//     countryFilter: (type:string)=> void
// }


export type oneCity = {
    id: number
    title: string
}






const Select = ( ) => {

    const [myCountry, setmyCountry] = useState<Array<oneCity>>([
        {id: 2, title: "Minsk"},
        {id: 2, title: "Gomel"},
        {id: 2, title: "Mogelev"},
        {id: 1, title: "Kiev"},
        {id: 1, title: "Lviv"},
        {id: 1, title: "Odesa"},
        {id: 3, title: "Moscva"},
        {id: 3, title: "Piter"},
        {id: 3, title: "Tymen"},
    ])

    const [count, setCount] = useState<number>(0)

    const [countryFilter, setCountryFilter] = useState("")
    //
    let newCountry = myCountry
    if (countryFilter === "bel") {
        newCountry = myCountry.filter(f => f.id === 2)

    }
    if (countryFilter === "uk") {
        newCountry = myCountry.filter(f => f.id === 1)
    }
    if (countryFilter === "russ") {
        newCountry = myCountry.filter(f => f.id === 3)
    }
    if (countryFilter === "all") {
        newCountry = myCountry.filter(f => f)
    }


  let  countryOfFilter = newCountry.map((m,i) => <div key={i}>{m.title}</div>)


    const countPlus =()=> {
        setCount(count+1)
        console.log("count+")
    }
    const filterBel =()=> {
        setCountryFilter("bel")
        console.log("filter")
    }

    return(
        <div>{countryOfFilter}
        <button onClick={filterBel} > bel </button>
        <button onClick={()=> setCountryFilter("uk")} > uk </button>
        <button onClick={()=> setCountryFilter("russ")} > russ </button>
        <button onClick={()=> setCountryFilter("all")} > all </button>
      <div>
            <span>{count}</span>
            <button onClick={countPlus} >+</button>
      </div>
      </div>

    )
}

export default Select