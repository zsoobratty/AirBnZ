import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Space from './Space'


const Home = () => {

    const [spaces, setSpaces] = useState([])
    const [load, setLoad] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/spaces')
            .then (res => {
                console.log(res.data)
                setSpaces(res.data)
                setLoad(true)
            })
            .catch(err => {
                setError(err.message)
                setLoad(true)
            })
    }, [])


    return (
        <div>
            <h1>Spaces</h1>
            <h2>Here are the spaces we have available</h2>
            { spaces.map((space) => (
                <Space space={space}/>
            )
            )}
            
        </div>
    )
}

export default Home
