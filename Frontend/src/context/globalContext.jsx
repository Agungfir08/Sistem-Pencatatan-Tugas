import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    // localhost:4000/login
    const [data, setData] = useState(null)
    const [input, setInput] = useState({
        name: "",
        email : "",
        password : "",
        image_url : "",
    })

    useEffect(()=>{
        if (fetchStatus === true){
            axios.get("https://tasks-three-mauve.vercel.app/")
            .then((res) => {
                setData( [...res.data] )
            })
            .catch((err) => {
                console.log(err)
            })
            setFetchStatus(false)
        }
        setFetchStatus(true)
    }, [fetchStatus, setFetchStatus])

    const handleChange = (event) => {
        
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
        if (name === 'name') {
            setInput( {...input, name : value} )
        } else if (name === 'email') {
            setInput( {...input, email : value} )
        } else if (name === 'password') {
            setInput( {...input, password : value} )
        }
    }

    const handleLogin = (event) => {
        event.preventDefault()

        let {email, password} = input

        axios.post(`localhost:4000/login`, {email, password})
        .then((res) => {
            let {token} = res.data
            console.log(token)
            Cookies.set('token', token, {expires : 1})
            navigate('/')
        }) 
        .catch((err) => {
            alert("Your Email or Password Wrong")
        })
    }
    
    const handleRegis = (event) => {
        event.preventDefault()

        let {name, email, password, image_url} = input

        axios.post(`localhost:4000/register`, {name, email, password, image_url})
        .then((res) => {
            let {token} = res.data
            Cookies.set('token', token)
            navigate('/')
        }) 
        .catch((err) => {
            alert(err.message)
        })
    }

    
    // const state = {
        
    // }

    const handFunction = {
        handleLogin,
        handleRegis,
        handleChange
    }



    return( 
        <GlobalContext.Provider value={
            {
                state, handleFunction
            }
        }
        >
            {props.children}
        </GlobalContext.Provider>
    )
}