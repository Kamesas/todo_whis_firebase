import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            newNoteContent: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            newNoteContent: e.target.value,
        })
    }

    writeNote() {
        this.props.addNote(this.state.newNoteContent);
        this.setState({
            newNoteContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper" >
                <input type="text" className="noteInput"
                        placeholder="Write a new note..."
                        value={this.state.newNoteContent}
                        onChange={this.handleUserInput}
                         />
                <button onClick={this.writeNote} className="noteButton">Add note</button>               
            </div>
        )
    }
}

export default NoteForm;