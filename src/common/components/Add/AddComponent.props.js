import PropTypes from 'prop-types';

const props = {
  title: PropTypes.string,
  whiteboardId: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onAddInfoListItem: PropTypes.func.isRequired,
  infoListItem: PropTypes.arrayOf(PropTypes.string),
  isEdit: PropTypes.bool,
  onRemoveInfoListItem: PropTypes.func,
  onSaveInfoListItem: PropTypes.func,
};

export default props;
