import React from 'react'
import {Routes, Route} from "react-router-dom"
import Profile from '../components/Profile'

export default function UsersContainer({user}) {
    return (
        <div>
            <Routes>
                <Route path=":id" element={<Profile user={user} />}></Route>
            </Routes>
        </div>
    )
}