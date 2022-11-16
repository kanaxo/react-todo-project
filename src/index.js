import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"
import Navbar from "./functionBased/components/Navbar"

// const element = <h1>Hello from Create React App</h1>
// ReactDOM.render(element, document.getElementById("root"))

import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css" 
// import { MyContext } from "./context"

ReactDOM.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<TodoContainer/>}/>
                <Route path="about/*" element={<About/>}/>
                <Route path="*" element={<NotMatch/>}/>
            </Routes>
        </Router>
        </React.StrictMode>, 
    document.getElementById("root"))

// ReactDOM.render(
//     <MyContext>
//         <TodoContainer />
//     </MyContext>,
//     document.getElementById("root")
// )
