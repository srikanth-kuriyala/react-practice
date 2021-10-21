/**
 * useEffect Hook: will take 2 arguments callback and dependencies.
 * When ever there is a change in dependecies then only callback will executed.
 * In the below example calling an API with page number. So I passed [page] as dependency and when ever page number changes callback will execute again.
 */

import React, { useEffect, useState } from "react";

function HookUseEffect() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    // After `return` this useEffect will call
    useEffect(function callback() {
        document.title = "Greetings SRK"
        fetch(`https://reqres.in/api/users?page=${page}`)
        .then((response) => response.json())
        .then((result) => setUsers(result.data))
    }, [page])

    // At first `return` will call
    return (
        <div>
            <button onClick={() => setPage(page + 1)}>Next</button>
            <button onClick={() => setPage(page - 1)} disabled={page === 1 ? true : false}>Prev</button>

            <ul>
                {users.length > 0 ? users.map((user, index) => {
                    return <li key={index}>
                        <ul>
                            <li>ID: {user.id}</li>
                            <li>First name: {user.first_name}</li>
                            <li>Last name: {user.last_name}</li>
                            <li>Email: {user.email}</li>
                        </ul>
                    </li>
                }) : <p>No results found !</p>}
            </ul>
        </div>
    )
}
export default HookUseEffect