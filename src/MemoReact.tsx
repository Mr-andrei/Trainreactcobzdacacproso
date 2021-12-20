import React, {useMemo, useState} from "react";


export type CounterPropsType = {
    count:number
}

export const Counter = (props:CounterPropsType) => {
    return(
        <div>{props.count}</div>
    )
}

export type UsersPropsType ={
    users: Array<string>
}
const Users = ({users}:UsersPropsType ) => {
    console.log("Users")
    return(<div>{
            users.map((m, i) => <div key={i}>{m}</div>)
        } </div>
        )
}

const UsersMemo = React.memo(Users)


export const Visual = () => {
    let [count, setCount] = useState<number>(0)
    let [users, setUsers] = useState<Array<string>>(["Andrei", "Kiril", "Petro","Katy","ilya"])

    const usersUseMem = useMemo(()=> {
       return users.filter(f => f.toLowerCase().indexOf('a') > -1 )
    },[users])

    return(
        <div>
            <button onClick={()=> setCount(count+1)}>Plus memo</button>
            <Counter count={count}/>
            <UsersMemo users={usersUseMem}/>

        </div>
    )
}