import PropTypes from 'prop-types';

const propTypes = {
  whiteboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  onRemoveWhiteboard: PropTypes.func.isRequired,
};

export default propTypes;
