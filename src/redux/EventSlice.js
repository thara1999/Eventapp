import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getevents, updateevent } from '../api/api';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
    const response = await getevents();
    // console.log(response.data)
    return response.data;
});
export const updateEventTickets = createAsyncThunk('events/updateEventTickets', async ({ id, updatedEvent }) => {
    const response = await updateevent(id, updatedEvent);
    // console.log(response.data)
    return response.data;
});
const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        filteredEvents: [],
        searchQuery: '',
        selectedCategory: '',
        status: 'idle',
        error: null,
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        filterEvents: (state) => {
            state.filteredEvents = state.events.filter(event => {
                const matchesCategory = state.selectedCategory ? event.category === state.selectedCategory : true;
                const matchesSearch = state.searchQuery ? event.title.toLowerCase().includes(state.searchQuery.toLowerCase()) : true;
                return matchesCategory && matchesSearch;
            });
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.events = action.payload
                state.filteredEvents = action.payload
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(updateEventTickets.fulfilled, (state, action) => {
                const index = state.events.findIndex(event => event.id === action.payload.id);
                if (index !== -1) {
                    state.events[index] = action.payload;
                    state.filteredEvents[index] = action.payload;
                }
            });
    }
});

export const { setSearchQuery, setSelectedCategory, filterEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
