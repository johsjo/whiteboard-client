import PropTypes from 'prop-types';

const props = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default props;
