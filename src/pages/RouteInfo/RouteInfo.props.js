import PropTypes from 'prop-types';

const props = {

  match: PropTypes.string.isRequired,
  history: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string.isRequired,

};

export default props;
