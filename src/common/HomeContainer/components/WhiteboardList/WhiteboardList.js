import React from 'react';
import './WhiteboardList.css';

import WhiteboardListItem from './components/WhiteboardListItem';
import whiteboardListProps from './WhiteboardList.props';

const WhiteboardList = (props) => {
  const handleRemove = (id) => {
    props.onRemoveWhiteboard(id);
  };

  return (
    <ul className="whiteboard-list">
      {
        props.whiteboards.map(whiteboard => (
          <WhiteboardListItem
            key={whiteboard.id}
            id={whiteboard.id}
            title={whiteboard.title}
            onRemove={handleRemove}
          />
        ))
      }
    </ul>
  );
};

WhiteboardList.propTypes = whiteboardListProps;

export default WhiteboardList;
