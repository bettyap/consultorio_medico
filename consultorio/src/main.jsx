import React from 'react'
import ReactDOM from 'react-dom/client'
import './lib/dayjs'
import { AuthProvider } from './providers/auth'
import { SchedulingProvider } from './providers/scheduling'
import Router from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SchedulingProvider>
        <Router />
      </SchedulingProvider>
    </AuthProvider>
  </React.StrictMode>,
)
