import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './EventSlice';

const store = configureStore({
    reducer: {
        events: eventsReducer,
    },
});

export default store;