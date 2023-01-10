import { hop } from '@onehop/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

hop.init({
  projectId: process.env.REACT_APP_OBS_HOP_PROJECT_ID,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
