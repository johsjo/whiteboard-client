import React from 'react';
import './AddWhiteboard.css';

import addWhiteboardProps from './AddWhiteboard.props';

class AddWhiteboard extends React.Component {
  constructor() {
    super();
    this.state = {
      inputTitle: '',
      addFormVisible: false,
    };
    this.handleClickShowForm = this.handleClickShowForm.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleClickShowForm() {
    this.setState({ addFormVisible: !this.state.addFormVisible });
  }

  handleClickSave() {
    this.props.onAddWhiteboard(this.inputTitle.value);
    this.inputTitle.value = '';
    this.setState({ addFormVisible: !this.state.addFormVisible });
  }

  generateAddForm() {
    return (
      <div className="hidden-form">
        <div className="input-form">
          <h5>
          Name:
          </h5>
          <input
            className="add-whiteboard-input"
            type="text"
            ref={(currentElement) => { this.inputTitle = currentElement; }}
            placeholder="Whiteboard name"
          />
        </div>
        <button
          className="add-whiteboard-button"
          type="button"
          onClick={this.handleClickSave}
        >
      Save
        </button>
      </div>
    );
  }

  render() {
    return (<div>
      <button
        className="add-whiteboard-button"
        type="button"
        onClick={this.handleClickShowForm}
      >
    add whiteboard
      </button>
      { this.state.addFormVisible ? this.generateAddForm() : null }
    </div>
    );
  }
}

AddWhiteboard.propTypes = addWhiteboardProps;

export default AddWhiteboard;
