import React from 'react';

const RouteInfo = props => (
  <div>
    <h1>{props.match.params.id}</h1>
    <p>match = {JSON.stringify(props.match)}</p>
    <p>history = {JSON.stringify(props.history)}</p>
    <p>location = {JSON.stringify(props.location)}</p>
  </div>
);

export default RouteInfo;
