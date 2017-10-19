import PropTypes from 'prop-types';

const props = {
  whiteboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  handleAddWhiteboard: PropTypes.func.isRequired,
  handleRemoveWhiteboard: PropTypes.func.isRequired,
};

export default props;
