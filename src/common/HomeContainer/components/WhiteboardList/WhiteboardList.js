import React from 'react';

import WhiteboardListItem from './components/WhiteboardListItem';
import whiteboardListProps from './WhiteboardList.props';

const WhiteboardList = (props) => {
  const handleRemove = (id) => {
    props.onWhiteboardRemove(id);
  };

  return (
    <ul className="TodoList">
      {
        props.whiteboards.map(whiteboard => (
          <WhiteboardListItem
            key={whiteboard.id}
            id={whiteboard.id}
            value={whiteboard.value}
            onRemove={handleRemove}
          />
        ))
      }
    </ul>
  );
};

WhiteboardList.propTypes = whiteboardListProps;

export default WhiteboardList;
