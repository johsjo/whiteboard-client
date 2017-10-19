import { connect } from 'react-redux';

import HomeWrapper from './HomeWrapper';
import { addWhiteBoard, removeWhiteBoard } from '../../reduxStore/config/whiteboard';

const mapStateToProps = state => ({
  whiteboards: state.whiteboards,
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (id) => {
    dispatch(removeWhiteBoard(id));
  },
  handleAdd: (note) => {
    dispatch(addWhiteBoard(note));
    // dispatch(clearInfoList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);
