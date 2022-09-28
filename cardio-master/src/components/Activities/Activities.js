import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'
import Card from '../Card/Card'
import Nav from '../Nav/Nav'

const Activities = ({handleCardioAdd}) => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setDatas(data))

    }, [])


    return (
        <div className='container'>
            <Nav />
            <div className="row">
            {
                datas.map((data, index) =>
                    <div key={index} className="col-md-4 col-sm-6 col-xs-12">
                        <Card data={data} handleCardioAdd={handleCardioAdd}/>
                    </div>
                )
            }

            </div>
            
            {/* <Blog/> */}
        </div>
    )
}

export default Activities