import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Toaster } from 'sonner'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
        <Toaster toastOptions={{
          style: {
            background: '#f5f5f708',
            color:'#f6f6f6'
          },
          className: 'class',
        }} />
      </Provider>
    </AuthProvider>
  </StrictMode>,
)
