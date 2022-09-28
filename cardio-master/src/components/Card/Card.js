import React from 'react'

const Card = ({ data,handleCardioAdd }) => {

    // console.log(data)
    const { duration, name, set, url } = data;

    return (
        <div className="card my-3">
            <img src={url} className="card-img-top" alt="cardio-thumb" />
            <div className="card-body bg-light">
                <h3 className="card-title text-warning">{name}</h3>
                <p className="card-text fs-5">SET: {set}<br />Time Duration: <span className='text-warning'>{duration}m</span></p>
                <button onClick={(event)=>{handleCardioAdd(event,duration)}}  className="btn btn-warning text-white fs-5">Add to List</button>
            </div>
        </div>
    )
}

export default Card