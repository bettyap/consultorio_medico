import React from 'react'
import ReactDOM from 'react-dom/client'
import './lib/dayjs'
import { DoctorProvider } from './providers/doctors'
import { SchedulingProvider } from './providers/scheduling'
import Router from './routes'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DoctorProvider>
      <SchedulingProvider>
        <Router />
      </SchedulingProvider>
    </DoctorProvider>
  </React.StrictMode>,
)
