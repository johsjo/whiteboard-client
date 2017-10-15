import React from 'react';

import whiteboardListItemProps from './WhiteboardListItem.props';

const WhiteboardListItem = (props) => {
  const remove = () => {
    props.onRemove(props.id);
  };

  return (
    <li className={'WhiteboardListItem'}>
      <div className="WhiteboardListItem-value">{props.value}</div>
      <button
        onClick={remove}
      >
      X
      </button>
    </li>
  );
};

WhiteboardListItem.propTypes = whiteboardListItemProps;

export default WhiteboardListItem;
