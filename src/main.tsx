import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ReactCounterComponent} from "./Problem-1-React-Counter-Component/ReactCounterComponent.tsx";
import {UsersListComponent} from "./Problem-2-API-Fetching/UserListComponent.tsx";
import {ToDoAppComponent} from "./Problem-3-To-Do-App-Feature/ToDoAppComponent.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="container">
            <div className="d-flex">
                <div className="leftpane">
                    <h1>Problem 1 - React Counter Component</h1>
                    <ReactCounterComponent/>
                </div>
                <div className="middlepane">
                    <h1>Problem 2 - API Fetching</h1>
                    <UsersListComponent/>
                </div>
                <div className="rightpane">
                    <h1>Problem 3 - To Do App Feature</h1>
                    <ToDoAppComponent/>
                </div>
            </div>
        </div>
    </StrictMode>,
)
