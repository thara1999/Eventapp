import React, { useEffect } from 'react';
import { CircleSlash, Loader, Power } from 'lucide-react';
import EventCard from '../components/EventCard';
import { useAuth } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, filterEvents, setSearchQuery, setSelectedCategory } from '../redux/EventSlice';

const Events = () => {
    const dispatch = useDispatch()
    const { events, filteredEvents, searchQuery, selectedCategory, status, error } = useSelector((state) => state.events)
    const { logout } = useAuth()

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchEvents())
        }
    }, [status, dispatch]);

    useEffect(() => {
        dispatch(filterEvents());
    }, [searchQuery, selectedCategory, dispatch])

    const handleSearch = (e) => {
        dispatch(setSearchQuery(e.target.value))
    }

    const handleCategoryChange = (e) => {
        dispatch(setSelectedCategory(e.target.value))
    }

    return (
        <div className='event-home'>
            <div className="event-header">
                <h1>Events</h1>
                <button className='app-logout-btn' onClick={logout}>
                    <Power className='app-logout-ico' />
                </button>
            </div>
            <div className='event-actions'>
                <div className="event-sort">
                    <div className="select">
                        <select name="type" id="type" value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="" disabled>Choose an Event Type</option>
                            <option value="Music">Music</option>
                            <option value="School">School</option>
                            <option value="Office">Office</option>
                        </select>
                    </div>
                    <input
                        type="search"
                        className='search-input'
                        placeholder='Search Event'
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <div className='event-area'>
                    {status === 'loading' ? (
                        <div className='event-not-found'>
                            <div className='app-card'>
                                <Loader className='animate-spin' />
                                <p>Loading</p>
                            </div>
                        </div>
                    ) : error ? (
                        <div className='event-not-found'>
                            <div className='app-card'>
                                <CircleSlash />
                                <p>Error: {error}</p>
                            </div>
                        </div>
                    ) : filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <EventCard
                                key={event.id}
                                title={event?.title}
                                category={event?.category}
                                date={event?.date}
                                imageurl={event?.imageurl}
                                price={event?.price}
                                seats={event?.seats}
                                id={event?.id}
                            />
                        ))
                    ) : (
                        <div className='event-not-found'>
                            <div className='app-card'>
                                <CircleSlash />
                                <p>No events found</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Events;
