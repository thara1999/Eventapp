
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Events from './pages/Events'
import ViewEvent from './pages/ViewEvent'
import NotFound from './pages/NotFound'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route element={<AuthLayout />}>
                    <Route path='/events' element={<Events />} />
                    <Route path='/events/view/:id' element={<ViewEvent />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App