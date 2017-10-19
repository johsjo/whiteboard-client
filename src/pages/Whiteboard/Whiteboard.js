import React from 'react';

import WhiteboardProps from './Whiteboard.props';
import NoteContainer from '../../common/WhiteboardContainer';

const Whiteboard = props => (
  <div>
    <NoteContainer
      whiteboardId={props.match.params.id}
    />
  </div>
);

Whiteboard.propTypes = WhiteboardProps;

export default Whiteboard;
