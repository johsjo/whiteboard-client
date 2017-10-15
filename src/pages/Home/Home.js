import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <div>
      <NavLink to="test" activeClassName="Home-active-link"> test </NavLink>
      <NavLink to="/" activeClassName="Home-active-link">Home</NavLink>
    </div>
  </div>
);

export default Home;
