import React from 'react'
import '../../styles/Space.css'

const Space = ({space}) => {
    console.log(space)
    return (
        <div className='Space'>
            <div className="Space-card">
                <h2>{space.attributes.name} - £{space.attributes.price} per night</h2>
                <img src={space.attributes.img_url} alt={space.attributes.description}/>
                <p>{space.attributes.description}</p>
                <p>Available from {space.attributes.available_from} to {space.attributes.available_to} </p>
            </div>
        </div>
    )
}

export default Space
