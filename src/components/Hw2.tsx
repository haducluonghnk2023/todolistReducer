import React, { useMemo, useState } from 'react'

export default function Hw2() {
    const [users] = useState([
        { id: 1, name: 'A', age: 25 },
        { id: 2, name: 'B', age: 17 },
        { id: 3, name: 'C', age: 20 },
        { id: 4, name: 'D', age: 21 },
        { id: 5, name: 'E', age: 21 }
    ])
    const users18 = useMemo(()=>{
        return users.filter(users => users.age > 18)
    },[users])
  return (
    <div>
        <h2>Hw2</h2>
        <ul>
            {users18.map(users => (
                <li key={users.id}>{users.name}</li>
            ))}
        </ul>
    </div>
  )
}
