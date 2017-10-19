import React from 'react';

import addWhiteboardProps from './AddWhiteboard.props';

const AddWhiteboard = (props) => {
  let input;

  const handleClick = () => {
    props.handleAddWhiteboard(input.value);
    input.value = '';
    input.focus();
  };

  return (
    <div>
      <input
        className="add-whiteboard-input"
        type="text"
        ref={(currentElement) => { input = currentElement; }}
        placeholder="todo task"
      />
      <button
        className="add-whiteboard-button"
        type="button"
        onClick={handleClick}
      >
      add item
      </button>
    </div>
  );
};

AddWhiteboard.propTypes = addWhiteboardProps;

export default AddWhiteboard;
