// text field that accepts user input
import React, { useState } from "react"
import { IconContext } from "react-icons"
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = props => {
    // call hooks at the top level of function component
    /* const [title, setTitle] = useState("") */
    // title = this.state.title
    // setTitle = this.setState

    const [inputText, setInputText] = useState({
        title: "",
      })
    
    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (inputText.title.trim()){
            props.addTodoProps(inputText.title)
            setInputText({
                title:""
            })
        } else {
            alert("Please write item!")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
                <input type="text" 
                className="input-text"
                placeholder="Add todo here..." 
                value = {inputText.title}
                name = "title" 
                onChange={onChange}/>
                <IconContext.Provider 
                    value={{
                        color: "darkcyan",
                        style: { fontSize: "20px", color: "#ff0000" },
                        className: "submit-iconn",
                    }}>
                    <button className="input-submit">
                        <FaPlusCircle 
                        // style = {{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} 
                        />
                    </button>
                </IconContext.Provider>
            </form>
    )


    // MULTIPLE STATES useState example
    
    /*
    const [inputText, setInputText] = useState({
        fName: "",
        lastName: "",
      })

    const onChange = e => {
    setInputText({
        ...inputText, 
        // copy the entire properties from the old state 
        // using the spread operator (…) and override the part of it.
        [e.target.name]: e.target.value,
    })
    }
    
    const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
    }
    
    return (
    <>
        <form onSubmit={handleSubmit} className="form-container">
        <input
            type="text"
            className="input-text"
            placeholder="Add first name"
            value={inputText.fName}
            name="fName"
            onChange={onChange}
        />
        <input
            type="text"
            className="input-text"
            placeholder="Add last name"
            value={inputText.lastName}
            name="lastName"
            onChange={onChange}
        />

        <button className="input-submit">Submit</button>
        </form>
        <h2>{inputText.fName}</h2>
        <h2>{inputText.lastName}</h2>
    </>
    )
    
    */
}

export default InputTodo;