import React from 'react'
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faWeightScale, faTextHeight } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ durations }) => {

    console.log(durations)

    let totalTime = 0

    for (const time of durations) {
        totalTime += time
    }




    return (
        <>
            <div className='sidebar-content'>
                <div className="d-flex align-items-center justify-content-center bg-white py-3 rounded border border-1 mb-5">
                    <img src="https://avatars.githubusercontent.com/u/28301945?s=40&amp;v=4" alt="" className="rounded border border-5"></img>
                    <div className='ps-3'>
                        <h4 className='text-warning'>Mushfiqur Rahman </h4>
                        <FontAwesomeIcon icon={faMapPin} className="me-3" /> Dhaka, Bangladesh
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-around bg-white py-3 rounded border border-1 mb-5">
                    <div className='ps-3 text-center'>
                        <h4 className='text-warning'>85 KG </h4>
                        <FontAwesomeIcon icon={faWeightScale} className="me-1" /> Weight
                    </div>
                    <div className='ps-3 text-center'>
                        <h4 className='text-warning'>5'8" </h4>
                        <FontAwesomeIcon icon={faTextHeight} className="me-1" /> Height
                    </div>
                </div>

                <h2 className='text-warning mb-4'>Exercise Detais</h2>
                <div className="d-flex align-items-center justify-content-around bg-white py-3 rounded border border-1">
                    <h5>Time Duration</h5>
                    <h5>{totalTime} Minute</h5>
                </div>
            </div>
        </>
    )
}

export default Sidebar