import { connect } from 'react-redux';

import HomeWrapper from './HomeWrapper';
import { addWhiteboard, removeWhiteboard } from '../../reduxStore/config/whiteboards';

const mapStateToProps = state => ({
  whiteboards: state.reducerWhiteboards.whiteboards,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveWhiteboard: (id) => {
    dispatch(removeWhiteboard(id));
  },
  handleAddWhiteboard: (title) => {
    dispatch(addWhiteboard(title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);
