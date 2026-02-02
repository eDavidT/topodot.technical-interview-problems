import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="container">
            <div className="d-flex">
                <div className="leftpane">
                    <h1>Problem 1 - React Counter Component</h1>
                </div>
                <div className="middlepane">
                    <h1>Problem 2 - API Fetching</h1>
                </div>
                <div className="rightpane">
                    <h1>Problem 3 - To Do App Feature</h1>
                </div>
            </div>
        </div>
    </StrictMode>,
)
