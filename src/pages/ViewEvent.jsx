import { ArrowLeft, ChevronLeft, ChevronLeftCircleIcon, CircleDollarSign, CirclePlay, CircleUser, Clock, Ticket } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateEventTickets } from '../redux/EventSlice';
import { toast } from 'sonner';
const ViewEvent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const event = useSelector((state) =>
        state.events.filteredEvents.find(event => event.id === id)
    );
    if (!event) {
        return (
            <div className='event-home'>
                <div className="event-header">
                    <h1>Event Not Found</h1>
                </div>
            </div>
        );
    }
    const handleBuyTickets = () => {
        if (event.seats > 0) {
            const updatedEvent = { ...event, seats: event.seats - 1 };
            dispatch(updateEventTickets({ id, updatedEvent }));
            toast.success('Ticket purchased successfully!')
        } else {
            toast.error('No seats available')
        }
    };
    console.log(id)
    return (
        <div className='event-home'>
            <div className="event-header">
                <h1>{event.title}</h1>
                <button className='app-btn-ico' onClick={() => navigate(-1)}>
                    <ChevronLeft className='ico-opt' /> Back
                </button>
            </div>

            <div className='event-actions'>
                <div className='event-view-panel'>
                    <div className="event-view-left">
                        <img src={event.imageurl} alt={event.title} className='img-card' />
                        <div className='event-content-desc'>
                            <h4>
                                {event.description}
                            </h4>
                        </div>
                    </div>
                    <div className="event-view-right">
                        <div className="event-view-data">
                            <div className="card-item"> <CirclePlay /> {event.category} </div>
                            <div className="card-item"> <Clock /> {event.date} </div>
                            <div className="card-item"> <Ticket /> {event.seats} </div>
                            <div className="card-item"> <CircleDollarSign /> {event.price} </div>
                        </div>
                        <button className='app-btn' disabled={event.seats === 0} onClick={handleBuyTickets}>
                            Buy Tickets
                        </button>
                    </div>

                </div>
                {/* <h2>Category: {event.category}</h2>
                <p>Date: {event.date}</p>
                <p>Price: ${event.price}</p>
                <p>Seats Available: {event.seats}</p>
                <img src={event.imageurl} alt={event.title} /> */}
            </div>
        </div>
    )
}

export default ViewEvent