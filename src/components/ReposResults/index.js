import React from 'react';

import './style.scss'

const ReposResults = ({results}) => {
  //console.log(results);
  //console.log(results.name, results.owner.login, results.description);
  if(results.name && results.owner.login && results.description) {
    //console.log("Afficher mode");
    return (
      <div className="repos-results">
        <img className="repos-thumbnail" src={results.owner.avatar_url}></img>
        <h2 className="repos-name">{results.name}</h2>
        <p className="repos-owner">{results.owner.login}</p>
        <p className="repos-excerpt">{results.description}</p>
      </div>
    )
  } else {
    return null;
  }
} 

export default ReposResults;
