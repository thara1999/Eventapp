import { CircleDollarSign, CirclePlay, CircleUser, Clock, Ticket } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const EventCard = ({title,category,date,seats,price,imageurl,id}) => {
    const nav = useNavigate()

    const handleRoute = () => {
        console.log(id)
        nav(`/events/view/${id}`)
    }

    return (
        <div className='app-card-2'>
            <img src={imageurl} alt={title} className='img-card' />
            <div className="card-data">

                <div className="card-title">
              {title}
                </div>
                <div className='card-body'>
                    <div className="card-item"> <CirclePlay /> {category} </div>
                    <div className="card-item"> <Clock /> {date} </div>
                    <div className="card-item"> <Ticket /> {seats} </div>
                    <div className="card-item"> <CircleDollarSign /> {price} </div>
                </div>
            </div>
            <button className='app-btn-2' onClick={handleRoute}>
                View Event
            </button>
        </div>
    )
}

export default EventCard