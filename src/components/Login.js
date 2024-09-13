import React from "react"
import { useNavigate } from "react-router-dom"
export default function Login(){
    const navigate=useNavigate();

function onSubmit(){
    navigate('/dashboard');
}

    return <>
    <h1>Login page</h1>
    <button onClick={onSubmit}>Login</button>
    </>
}