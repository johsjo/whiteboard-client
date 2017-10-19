import React from 'react';

import WhiteboardList from './components/WhiteboardList';
import HomeWrapperProps from './HomeWrapper.props';
import AddComponent from './components/AddWhiteboard';

const HomeWrapper = props => (
  <div className="HomeContainer-wrapper">
    <AddComponent
      onAdd={props.handleAddWhiteboard}
    />
    <WhiteboardList
      whiteboards={props.whiteboards}
      onRemove={props.handleRemoveWhiteboard}
    />
  </div>
);

HomeWrapper.propTypes = HomeWrapperProps;

export default HomeWrapper;
