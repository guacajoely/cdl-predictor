import { Route, Routes } from "react-router-dom"
import { Register } from "../auth/register.js"
import { Login } from "../auth/login.js"
import { MainContainer } from "../mainContainer/mainContainer.js"
import { About } from "../about/about.js"
import "./appViews.css"

export const ApplicationViews = () => {

	return (
        <Routes>
    
                <Route path="/" element={ <MainContainer />} />

                <Route path="/about" element={<About />} />
                <Route path="/sources" element={<div className="sources--header">STAT SOURCES</div>} />
                <Route path="/login" element={<Login />} />
	        <Route path="/register" element={<Register />} />\
            
        </Routes>
    )
}