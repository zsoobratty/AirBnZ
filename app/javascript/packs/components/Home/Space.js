import React from 'react'

const Space = ({space}) => {
    console.log(space)
    return (
        <div>
            <h1>{space.id}</h1>
            <h2>{space.attributes.name}</h2>
            <img src={space.attributes.img_url} alt={space.attributes.description}/>
        </div>
    )
}

export default Space
