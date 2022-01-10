import React from 'react'

export default function Profile({user}) {
    return (
        <div>
            <h1>Welcome {user.username}</h1>
        </div>
    )
}