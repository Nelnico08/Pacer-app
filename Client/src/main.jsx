import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './redux/store'
import { BrowserRouter } from "react-router-dom"

export const baseUrl = import.meta.env.MODE === "production" ? import.meta.env.VITE_BASE_URL : "https://localhost:3001"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
