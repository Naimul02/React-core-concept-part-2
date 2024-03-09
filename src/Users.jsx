import { useEffect, useState } from "react";

export default function Users(){
    const [users , setUsers] = useState([]);

    // useEffect sadharonoto 2ta jinis niye ne . ekta holo function ar arekta holo dependency
      useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
      } ,[])



    return (
      // external resource theke data load korte hole amra use useEffect use kore data load korte pari.
        <div>
              <h3>Users : {users.length}</h3>
        </div>
    )
}

/**
 *1.declare a state to hold the data 
 * 2. useEffect with call back and dependency array
 * 3.use fetch to load data
 */ 