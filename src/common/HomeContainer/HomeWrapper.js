import React from 'react';
import './HomeWrapper.css';

import WhiteboardList from './components/WhiteboardList';
import HomeWrapperProps from './HomeWrapper.props';
import AddComponent from './components/AddWhiteboard';

const HomeWrapper = props => (
  <div className="HomeContainer-wrapper">
    <WhiteboardList
      whiteboards={props.whiteboards}
      onRemoveWhiteboard={props.handleRemoveWhiteboard}
    />
    <AddComponent
      onAddWhiteboard={props.handleAddWhiteboard}
    />
  </div>
);

HomeWrapper.propTypes = HomeWrapperProps;

export default HomeWrapper;
