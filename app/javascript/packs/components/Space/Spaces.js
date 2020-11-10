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
                console.log(res.data.data)
                setSpaces(res.data.data)
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
            <h2>Here are the spaces we have available:</h2>

            { load ? (
                <div className="Spaces-container">
                    { spaces.map((space) => (
                        <Space key={space.id} space={space}/>
                    ))}
                </div>
            ) : (
                <h1>Loading... </h1>
            )}   
        </div>
    )
}

export default Home
