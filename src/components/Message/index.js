import React from 'react';

import './index.scss';
import PropsType from 'prop-types';

const Message = ({countResult}) => {
  return (
    <p>La recherche a donnée {countResult} résulats</p>
  )
}

export default Message;
