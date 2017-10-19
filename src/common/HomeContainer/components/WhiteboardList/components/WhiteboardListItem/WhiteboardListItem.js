import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteboardListItemProps from './WhiteboardListItem.props';
import './WhiteboardListItem.css';

const WhiteboardListItem = (props) => {
  const remove = () => {
    props.onRemove(props.id);
  };

  const whiteboardPath = `/whiteboard/${props.id}`;

  return (
    <li>
      <div className="WhiteboardListItem">

        <NavLink to={whiteboardPath} activeClassName="Home-active-link">
          <h4>{props.title}</h4>
        </NavLink>
        <button onClick={remove}>
          X
        </button>
      </div>
    </li>
  );
};

WhiteboardListItem.propTypes = whiteboardListItemProps;

export default WhiteboardListItem;
