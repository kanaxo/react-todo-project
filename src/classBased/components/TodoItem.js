import React from "react"

// Import CSS
import styles from "./TodoItem.module.css"

//function ToDoItem ( props ){

class ToDoItem extends React.Component {


    

    state = {
        editing: false,
    }

    handleEditing =  () => {
        console.log ("Edit MODE Activated");
        this.setState({
            editing: true,
        })
    }

    handleUpdatedDone = event => {
       // console.log( event.key);
       if ( event.key === "Enter") {
           this.setState ({ editing: false })
       }
    }
    
    componentWillUnmount() {
        console.log("Cleaning up...")
      }

    render() {

        const {completed, id, title } = this.props.todo;

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }


        let viewMode ={}
        let editMode = {}

        if ( this.state.editing ){
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        

        return (
            <li className={ styles.item } > 

                <div onDoubleClick = { this.handleEditing }  style ={ viewMode }> 

                    <input type="checkbox" 
                        className={ styles.checkbox }
                        checked={ completed }
                        onChange ={ () => this.props.handleChangeProps( id ) }
                    />

                

                <button onClick={ () => this.props.deleteTodoProps ( id ) } > 
                    Delete
                </button>
                    <span style ={ completed ? completedStyle : null } >
                        { title }
                    </span>
                
                </div> 
                <input 
                    type="text" 
                    style= { editMode } 
                    className={ styles.textInput} 
                    value={ title }
                    onChange={ e => {
                        this.props.setUpdate ( e.target.value, id )
                        }
                    }
                    onKeyDown= { this.handleUpdatedDone }
                />
            </li>
        
        )

    }

    


} // End Class

/*
class ToDoItem extends React.Component {
    render() {
        return <li> { this.props.todo.title } </li>

    }

}
*/

export default ToDoItem