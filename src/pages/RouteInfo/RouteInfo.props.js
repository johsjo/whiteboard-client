import React from 'react';
import PropTypes from 'prop-types';

const props = {

  match: React.PropTypes.string.isRequired,
  history: React.PropTypes.arrayOf(PropTypes.string),
  location: React.PropTypes.string.isRequired,

};

export default props;
